import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpService} from '../shared/services/http.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgEventBus} from 'ng-event-bus';
import {AddAccountComponent, EditAccountComponent, ViewAccountComponent} from '../accounts/accounts.component';
import {ViewPaymentComponent} from '../payments/payments.component';
import {HttpParams} from '@angular/common/http';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class TodosComponent implements OnInit {

    items = [];
    displayItems = [];
    packages = [];
    masters = [];
    isLoading = true;
    filter = {search: '', type: '0'};
    sort = 'asc';
    sortBy = 'created_at';

    constructor(private http: HttpService, private modalService: NgbModal, private eventBus: NgEventBus) {
    }

    ngOnInit() {
        this.getItems();
    }

    getItems() {
        this.http.get(this.http.withApiBase('shortcuts/todos')).subscribe(data => {
            this.items = data;
            this.changeSort('created_at');
            this.isLoading = false;
        }, error => {
            console.log(error)
        });
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
                    (item.account_fullname ? item.account_fullname : '').indexOf(this.filter.search) === -1
                    && '' + item['account_id'] !== this.filter.search
                ) {
                    item.visible = false;
                }
                return item;
            });
        }

        if ('' + this.filter.type !== '0') {
            this.items = this.items.map(item => {
                if ('' + item.type !== '' + this.filter.type) {
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

    action(item) {
        switch (item.type) {
            case 'first payment':
            case 'late payment':
                const editModal1 = this.modalService.open(EditAccountComponent, {size: 'lg', windowClass: 'modal-xl'});
                editModal1.componentInstance.id = item.account_id;
                break;
            case 'payment':
                const editModal2 = this.modalService.open(ViewPaymentComponent, {size: 'lg', windowClass: 'modal-xl'});
                editModal2.componentInstance.id = item.data.id;
                break;
            case 'kick':
                const editModal3 = this.modalService.open(ViewAccountComponent, {size: 'lg', windowClass: 'modal-xl'});
                editModal3.componentInstance.id = item.account_id;
                break;
            case 'registeration':
                const editModal4 = this.modalService.open(RegisterationCheckComponent, {size: 'lg', windowClass: 'modal-xl'});
                editModal4.componentInstance.data = item.data.account;
                editModal4.componentInstance.id = item.data.id;
                break;
        }

    }
}


@Component({
    selector: 'app-registeration-check-modal',
    templateUrl: './registeration.component.html',
    styleUrls: ['./todos.component.scss']
})

export class RegisterationCheckComponent {
    data = {
        email: '',
        fullname: '',
        password: '',
        number: '',
    };
    isLoading = true;
    id = 0;


    constructor(public activeModal: NgbActiveModal, private http: HttpService, private eventBus: NgEventBus) {
        setTimeout(() => {
            this.getData();
        }, 200);
    }

    getData() {
        this.isLoading = false;
    }

    accept() {
        const body = new HttpParams();

        this.http.post(this.http.withApiBase('shortcuts/' + this.id + '/accept'), body).subscribe(data => {
            this.isLoading = false;
            this.eventBus.cast('todos:renew', this.data);
            this.activeModal.close();
        }, err => {
            this.isLoading = false;
            console.log(err);
        });
    }

    reject() {
        const body = new HttpParams();

        this.http.post(this.http.withApiBase('shortcuts/' + this.id + '/reject'), body).subscribe(data => {
            this.isLoading = false;
            this.eventBus.cast('todos:renew', this.data);
            this.activeModal.close();
        }, err => {
            this.isLoading = false;
            console.log(err);
        });
    }
}


