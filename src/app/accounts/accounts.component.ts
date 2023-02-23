import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpService} from '../shared/services/http.service'
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgEventBus} from 'ng-event-bus';
import {HttpParams} from '@angular/common/http';
import swal from 'sweetalert2';

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AccountsComponent implements OnInit {

    items = [];
    displayItems = [];
    packages = [];
    masters = [];
    isLoading = true;
    filter = {search: '', master_id: 0, status: -1, package_id: 0};
    sort = 'asc';
    sortBy = 'id';

    constructor(private http: HttpService, private modalService: NgbModal, private eventBus: NgEventBus) {
        this.eventBus.on('accounts:add').subscribe((message) => {
            this.getItems();
        });
    }

    ngOnInit() {
        this.getItems();
        this.getPackages();
        this.getMasters();
    }

    getItems() {
        this.http.get(this.http.withApiBase('accounts')).subscribe(data => {
            this.items = data;
            this.changeSort('id');
            this.isLoading = false;
        }, error => {
            console.log(error)
        });
    }

    getPackages() {
        this.http.get(this.http.withApiBase('packages')).subscribe(data => {
            this.packages = data;
        }, error => {
            console.log(error)
        });
    }

    getMasters() {
        this.http.get(this.http.withApiBase('masters')).subscribe(data => {
            this.masters = data;
        }, error => {
            console.log(error)
        });
    }

    getPackageName(id) {
        for (let i = 0; i < this.packages.length; i++) {
            if (this.packages[i].id == id) {
                return this.packages[i].name;
            }
        }
    }

    getStatusTitle(status) {
        if (status == 0) {
            return 'inactive';
        }
        if (status == 1) {
            return 'active';
        }
        return 'pending';
    }

    getStatusClass(status) {
        if (status == 0) {
            return 'btn-danger';
        }
        if (status == 1) {
            return 'btn-primary';
        }
        return 'btn-info';
    }

    getMasterName(master_id) {
        for (let i = 0; i < this.masters.length; i++) {
            if (this.masters[i].id == master_id) {
                return this.masters[i].email
            }
        }
        return 'Not Selected'
    }

    formatDate(time) {
        const d = new Date(time);
        return (d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate());

    }

    changeSort(sortBy) {
        if (this.sortBy === sortBy) {
            this.sort = (this.sort === 'desc' ? 'asc' : 'desc');
        } else {
            this.sort = 'desc';
            this.sortBy = sortBy;
        }

        this.items.sort((a, b) => {
            if (a[this.sortBy] === null || a[this.sortBy] === undefined) {
                this.filterList();
                return;
            }

            if (typeof a[this.sortBy] === 'number') {
                if (this.sort === 'asc') {
                    return a[this.sortBy] - b[this.sortBy]
                } else {
                    return b[this.sortBy] - a[this.sortBy]
                }
            } else {
                if (this.sort === 'desc') {
                    return a[this.sortBy].localeCompare(b[this.sortBy]);
                } else {
                    return b[this.sortBy].localeCompare(a[this.sortBy]);
                }
            }
        });
        this.filterList();
    }

    filterList() {
        this.displayItems = [];
        this.items = this.items.map(item => {
            item.visible = true;
            return item;
        });

        if (this.filter.search !== '') {
            this.items = this.items.map(item => {
                if (
                    (item.email ? item.email : '').indexOf(this.filter.search) === -1
                    && (item.fullname ? item.fullname : '').indexOf(this.filter.search) === -1
                    && '' + item['id'] !== this.filter.search
                ) {
                    item.visible = false;
                }
                return item;
            });
        }

        if ('' + this.filter.master_id !== '0') {
            this.items = this.items.map(item => {
                if ('' + item.master_id !== '' + this.filter.master_id) {
                    item.visible = false;
                }
                return item;
            });
        }

        if ('' + this.filter.status !== '-1') {
            this.items = this.items.map(item => {
                if ('' + item.status !== '' + this.filter.status) {
                    item.visible = false;
                }
                return item;
            });
        }

        if ('' + this.filter.package_id !== '0') {
            this.items = this.items.map(item => {
                if ('' + item.package_id !== '' + this.filter.package_id) {
                    item.visible = false;
                }
                return item;
            });
        }

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].visible) {
                this.displayItems.push(this.items[i]);
            }
        }


    }

    export() {
        let ids = [];
        for (let i = 0; i < this.displayItems.length; i++) {
            ids.push(this.displayItems[i].id);
        }

        window.open(this.http.withApiBase('accounts/export?ids=' + ids.join(',')), '_system');
    }

    add() {
        this.modalService.open(AddAccountComponent, {size: 'lg', windowClass: 'modal-xl'});
    }

    edit(id) {
        const editModal = this.modalService.open(EditAccountComponent, {size: 'lg', windowClass: 'modal-xl'});
        editModal.componentInstance.id = id;
    }

    view(id) {
        const editModal = this.modalService.open(ViewAccountComponent, {size: 'lg', windowClass: 'modal-xl'});
        editModal.componentInstance.id = id;
    }

    mass() {
        const editModal = this.modalService.open(MassMessageComponent, {size: 'lg', windowClass: 'modal-xl'});
        editModal.componentInstance.accounts = this.displayItems;
        const chat_ids = [];
        for (let i = 0; i < this.displayItems.length; i++) {
            if (this.displayItems[i].chat_id > 0) {
                chat_ids.push(this.displayItems[i].chat_id);
            }
        }
        editModal.componentInstance.chat_ids = chat_ids;
    }
}


@Component({
    selector: 'app-mass-message-modal',
    templateUrl: './mass.component.html',
    styleUrls: ['./accounts.component.scss']
})

export class MassMessageComponent {
    editorModulesConfig = {
        toolbar: [
            ['bold', 'italic'],
            [{'direction': 'rtl'}],
            ['link']
        ]
    };
    chat_ids = [];
    accounts = [];
    isLoading = false;
    reply = '';

    constructor(public activeModal: NgbActiveModal, private http: HttpService, private eventBus: NgEventBus) {

    }

    send() {
        this.isLoading = true;
        const body = new HttpParams()
            .set('chat_ids', this.chat_ids.join(','))
            .set('text', this.reply);

        this.http.post(this.http.withApiBase('messages/mass'), body).subscribe(data => {
            this.isLoading = false;
            this.activeModal.close();
        }, err => {
            this.isLoading = false;
            console.log(err);
        });
    }
}


@Component({
    selector: 'app-account-add-modal',
    templateUrl: './add.component.html',
    styleUrls: ['./accounts.component.scss']
})

export class AddAccountComponent {
    data = {
        email: '',
        fullname: '',
        password: '',
        telegram: '',
        instagram: '',
        phone: '',
        package_id: 0,
        master_id: 0,
        status: 1,
        birthday: {year: '', month: '', day: ''},
        expires_at: {year: '', month: '', day: ''},
        created_at: {year: '', month: '', day: ''},
        note: ''
    };
    isLoading = true;
    masters = [];
    packages = [];
    title = 'Add New';

    constructor(public activeModal: NgbActiveModal, private http: HttpService, private eventBus: NgEventBus) {
        this.getData();
    }


    getData() {
        this.http.get(this.http.withApiBase('masters/list')).subscribe(data => {
            this.masters = data;
            this.isLoading = false;
        }, err => {
            console.log(err);
            alert('error loading data:masters!');
            this.activeModal.dismiss();
        });

        this.http.get(this.http.withApiBase('packages')).subscribe(data => {
            this.packages = data;
            this.isLoading = false;
        }, err => {
            console.log(err);
            alert('error loading data:packages!');
            this.activeModal.dismiss();
        });
    }

    save() {
        this.isLoading = true;
        const created_at = new Date(this.data.created_at.year + '-' + this.data.created_at.month + '-' + this.data.created_at.day);
        const body = new HttpParams()
            .set('email', this.data.email)
            .set('password', this.data.password)
            .set('fullname', this.data.fullname)
            .set('telegram', this.data.telegram)
            .set('instagram', this.data.instagram)
            .set('phone', this.data.phone)
            .set('package_id', '' + this.data.package_id)
            .set('master_id', '' + this.data.master_id)
            .set('status', '' + this.data.status)
            .set('note', this.data.note)
            .set('created_at', '' + created_at.getTime() / 1000)
            .set('expires_at', this.data.expires_at.year + '-' + this.data.expires_at.month + '-' + this.data.expires_at.day)
            .set('birthday', this.data.birthday.year + '-' + this.data.birthday.month + '-' + this.data.birthday.day);

        this.http.post(this.http.withApiBase('accounts'), body).subscribe(data => {
            this.isLoading = false;
            this.eventBus.cast('accounts:add', this.data);
            this.activeModal.close();
        }, err => {
            this.isLoading = false;
            console.log(err);
        });
    }
}


@Component({
    selector: 'app-account-edit-modal',
    templateUrl: './add.component.html',
    styleUrls: ['./accounts.component.scss']
})

export class EditAccountComponent {
    data = {
        email: '',
        fullname: '',
        password: '',
        telegram: '',
        instagram: '',
        phone: '',
        package_id: 0,
        master_id: 0,
        status: 1,
        birthday: null,
        expires_at: null,
        created_at: null,
        note: ''
    };
    isLoading = true;
    masters = [];
    packages = [];
    title = 'Edit';
    id = 0;

    constructor(public activeModal: NgbActiveModal, private http: HttpService, private eventBus: NgEventBus) {
        setTimeout(() => {
            this.getData();
        }, 200);
    }


    getData() {
        this.http.get(this.http.withApiBase('accounts/' + this.id)).subscribe(data => {
            this.data = data;

            const birthday = new Date(data.birthday);
            this.data.birthday = {year: birthday.getFullYear(), month: birthday.getMonth() + 1, day: birthday.getDate()};

            const expires_at = new Date(data.expires_at);
            this.data.expires_at = {year: expires_at.getFullYear(), month: expires_at.getMonth() + 1, day: expires_at.getDate()};

            const created_at = new Date(data.created_at * 1000);
            this.data.created_at = {year: created_at.getFullYear(), month: created_at.getMonth() + 1, day: created_at.getDate()};

            this.isLoading = false;
        }, err => {
            console.log(err);
            alert('error loading data:account!');
            this.activeModal.dismiss();
        });

        this.http.get(this.http.withApiBase('masters/list')).subscribe(data => {
            this.masters = data;
        }, err => {
            console.log(err);
            alert('error loading data:masters!');
            this.activeModal.dismiss();
        });

        this.http.get(this.http.withApiBase('packages')).subscribe(data => {
            this.packages = data;
        }, err => {
            console.log(err);
            alert('error loading data:packages!');
            this.activeModal.dismiss();
        });
    }

    save() {
        this.isLoading = true;
        const created_at = new Date(this.data.created_at.year + '-' + this.data.created_at.month + '-' + this.data.created_at.day);
        const body = new HttpParams()
            .set('email', this.data.email)
            .set('password', this.data.password)
            .set('fullname', this.data.fullname)
            .set('telegram', this.data.telegram)
            .set('instagram', this.data.instagram)
            .set('phone', this.data.phone)
            .set('package_id', '' + this.data.package_id)
            .set('master_id', '' + this.data.master_id)
            .set('status', '' + this.data.status)
            .set('note', this.data.note)
            .set('created_at', '' + created_at.getTime() / 1000)
            .set('expires_at', this.data.expires_at.year + '-' + this.data.expires_at.month + '-' + this.data.expires_at.day)
            .set('birthday', this.data.birthday.year + '-' + this.data.birthday.month + '-' + this.data.birthday.day);

        this.http.put(this.http.withApiBase('accounts/' + this.id), body).subscribe(data => {
            this.isLoading = false;
            this.eventBus.cast('accounts:add', this.data);
            this.activeModal.close();
        }, err => {
            this.isLoading = false;
            console.log(err);
        });
    }
}


@Component({
    selector: 'app-account-view-modal',
    templateUrl: './view.component.html',
    styleUrls: ['./accounts.component.scss']
})

export class ViewAccountComponent {
    data = null;
    payments = null;
    messages = null;
    masters = [];
    packages = [];
    isLoading = true;
    disableInput = false;
    id = 0;
    reply = '';

    constructor(public activeModal: NgbActiveModal, private http: HttpService, private eventBus: NgEventBus) {
        setTimeout(() => {
            this.getData();
        }, 200);
    }


    getData() {
        this.http.get(this.http.withApiBase('accounts/' + this.id)).subscribe(data => {
            this.data = data;
            if (this.data.chat_id) {
                this.http.get(this.http.withApiBase('messages?sort=-id&per-page=50&filter[chat_id]=' + this.data.chat_id))
                    .subscribe(data2 => {
                        this.messages = data2.items.reverse();
                    });
            }
            this.isLoading = false;
        }, err => {
            console.log(err);
            alert('error loading data:account!');
            this.activeModal.dismiss();
        });

        this.http.get(this.http.withApiBase('payments?sort=-id&per-page=50&filter[account_id]=' + this.id)).subscribe(data => {
            this.payments = data.items;
            this.isLoading = false;
        }, err => {
            console.log(err);
            alert('error loading data:payments!');
        });

        this.http.get(this.http.withApiBase('masters/list')).subscribe(data => {
            this.masters = data;
        }, err => {
            console.log(err);
            alert('error loading data:masters!');
            this.activeModal.dismiss();
        });

        this.http.get(this.http.withApiBase('packages')).subscribe(data => {
            this.packages = data;
        }, err => {
            console.log(err);
            alert('error loading data:packages!');
            this.activeModal.dismiss();
        });
    }

    getPackageName() {
        if (this.data.package_id) {
            for (let i = 0; i < this.packages.length; i++) {
                if (this.packages[i].id == this.data.package_id) {
                    return this.packages[i].name;
                }
            }
        } else {
            return 'Not Selected';
        }
    }

    getMasterName() {
        if (this.data.master_id) {
            for (let i = 0; i < this.masters.length; i++) {
                if (this.masters[i].id == this.data.master_id) {
                    return this.masters[i].username + ' / ' + this.masters[i].email + ' (' + this.masters[i].accounts_count + '/5)';
                }
            }
        } else {
            return 'Not Selected';
        }
    }

    getStatusName() {
        if (this.data.status == 0) {
            return 'Inactive';
        } else if (this.data.status == 2) {
            return 'Pending';
        }
        return 'Active';
    }

    formatStatus(s) {
        if (s == 1) {
            return 'Successful';
        } else if (this.data.status == 2) {
            return 'Pending';
        }
        return 'Unsuccessful';
    }

    formatAmount(amount) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    formatDescription(d) {
        if (this.isJson(d)) {
            const json = JSON.parse(d);
            if (typeof json.description !== 'undefined') {
                if (json.description.length > 30) {
                    return json.description.substring(0, 30) + ' ...';
                } else {
                    return json.description;
                }
            }
        }
        if (d == '2') {
            return 'First Payment';
        }
        if (d == '1') {
            return 'Renewal';
        }
        return d;
    }


    isJson(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    getStatusClass(status) {
        if (status == 3) {
            return 'btn-danger';
        }
        if (status == 1) {
            return 'btn-primary';
        }
        return 'btn-info';
    }

    isFromUser(m) {
        if (m.command === 'register' || m.command === 'support') {
            return true;
        }
        return false;
    }

    htmlDecode(input) {
        var doc = new DOMParser().parseFromString(input, 'text/html');
        return doc.documentElement.textContent;
    }

    formatMessage(m) {
        switch (m.command) {
            case 'bot_reply':
                return this.htmlDecode(decodeURIComponent(m.data.replace(/\+/g, '%20'))).replace(/(?:\r\n|\r|\n)/g, '<br>');
            case 'register':
                const d = JSON.parse(m.data);
                let r = '<b>Registering New Account</b><br>';
                if (typeof d.account.fullname != 'undefined' && d.account.fullname) {
                    r += '<br><b>Fullname:</b> ' + d.account.fullname;
                }
                if (typeof d.account.number != 'undefined' && d.account.number) {
                    r += '<br><b>Phone Number:</b> ' + d.account.number;
                }
                if (typeof d.account.email != 'undefined' && d.account.email) {
                    r += '<br><b>Email:</b> ' + d.account.email;
                }
                if (typeof d.account.password != 'undefined' && d.account.password) {
                    r += '<br><b>Password:</b> ' + d.account.password;
                }
                return r;
            case 'support':
                const d2 = JSON.parse(m.data);
                let r2 = '<b>New Support Ticket</b><br>';
                for (const i of d2.messages) {
                    r2 += '<br>' + i.text;
                }
                return r2;
            case 'admin_message':
                const d3 = JSON.parse(m.data);
                let r3 = '<b>Admin Message / ' + d3.username + ':</b><br><br>';
                r3 += d3.text;
                return r3.replace(/(?:\r\n|\r|\n)/g, '<br>');
        }
        return m.command;
    }

    sendMessage() {
        this.disableInput = true;
        const body = new HttpParams()
            .set('chat_ids', this.data.chat_id)
            .set('text', this.reply);

        this.http.post(this.http.withApiBase('messages/mass'), body).subscribe(data => {
            this.reply = '';
            this.disableInput = false;
            this.http.get(this.http.withApiBase('messages?sort=-id&per-page=50&filter[chat_id]=' + this.data.chat_id))
                .subscribe(data2 => {
                    this.messages = data2.items.reverse();
                });
        }, err => {
            this.disableInput = false;
            console.log(err);
        });
    }

    kick() {
        swal({
            title: 'Are you sure?',
            text: 'Do you want to kick this account from master?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No, cancel'
        }).then((isConfirm) => {
            if (isConfirm.value) {
                this.disableInput = true;
                const body = new HttpParams()
                    .set('master_id', '0')
                    .set('status', '0');

                this.http.put(this.http.withApiBase('accounts/' + this.id), body).subscribe(data => {
                    this.disableInput = false;
                    this.eventBus.cast('todos:renew', this.data);
                    this.http.get(this.http.withApiBase('accounts/' + this.id)).subscribe(data2 => {
                        this.data = data2;
                    }, err => {
                        console.log(err);
                    });
                }, err => {
                    this.disableInput = false;
                    console.log(err);
                });
            }
        }).catch(swal.noop);
    }

    ActiveAccount() {
        swal({
            title: 'Are you sure?',
            text: 'Do you want to change this account status to "Active"?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No, cancel'
        }).then((isConfirm) => {
            if (isConfirm.value) {
                this.disableInput = true;
                const body = new HttpParams()
                    .set('status', '1');

                this.http.put(this.http.withApiBase('accounts/' + this.id), body).subscribe(data => {
                    this.disableInput = false;
                    this.eventBus.cast('todos:renew', this.data);
                    this.http.get(this.http.withApiBase('accounts/' + this.id)).subscribe(data2 => {
                        this.data = data2;
                    }, err => {
                        console.log(err);
                    });
                }, err => {
                    this.disableInput = false;
                    console.log(err);
                });
            }
        }).catch(swal.noop);
    }

    sendReminderMessage() {
        this.disableInput = true;
        const body = new HttpParams();
        this.http.post(this.http.withApiBase('accounts/' + this.id + '/send-reminder-message'), body).subscribe(data => {
            this.disableInput = false;
        }, err => {
            this.disableInput = false;
            console.log(err);
        });
    }

    sendPaymentLink() {
        this.disableInput = true;
        const body = new HttpParams();
        this.http.post(this.http.withApiBase('accounts/' + this.id + '/send-payment-link'), body).subscribe(data => {
            this.disableInput = false;
        }, err => {
            this.disableInput = false;
            console.log(err);
        });
    }
}


