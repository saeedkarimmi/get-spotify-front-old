import {Component, OnInit} from '@angular/core';
import {HttpService} from '../shared/services/http.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgEventBus} from 'ng-event-bus';
import {isJsObject} from '@angular/core/src/change_detection/change_detection_util';
import {HttpParams} from '@angular/common/http';
import {AddMasterComponent, EditMasterComponent} from '../masters/masters.component';

@Component({
    selector: 'app-payments',
    templateUrl: './payments.component.html',
    styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

    items = [];
    isLoading = true;
    filter = {search: '', type: -1, status: 1, description: -1};
    sort = 'asc';
    sortBy = 'id';
    page = 1;
    meta = {totalCount: 0, pageCount: 0, currentPage: 0, perPage: 20};

    constructor(private http: HttpService, private modalService: NgbModal, private eventBus: NgEventBus) {
        this.eventBus.on('payments:add').subscribe((message) => {
            this.getItems(this.page, this.sort, this.sortBy, this.filter);
        });
    }

    ngOnInit() {
        this.getItems(this.page, this.sort, this.sortBy, this.filter);
    }


    getItems(page, sort, sortBy, filter) {
        this.items = [];
        this.isLoading = true;
        let req_url = this.http.withApiBase('payments');
        req_url = req_url + '?sort=' + (sort === 'asc' ? '' : '-') + sortBy;
        req_url = req_url + '&filter[status]=' + filter.status;
        if (filter.search !== '') {
            req_url = req_url + '&filter[account_id]=' + filter.search;
        }
        if (filter.type != -1) {
            req_url = req_url + '&filter[type]=' + filter.type;
        }
        if (filter.description != -1) {
            req_url = req_url + '&filter[description]=' + filter.description;
        }
        req_url = req_url + '&page=' + this.page;
        this.http.get(req_url).subscribe(data => {
            this.items = data.items;
            this.meta = data['_meta'];
            this.page = this.meta.currentPage;
            this.isLoading = false;
        }, error => {
            this.isLoading = false;
            alert('error loading data!');
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

        this.getItems(this.page, this.sort, this.sortBy, this.filter);
    }

    changePage() {
        setTimeout(() => {
            this.getItems(this.page, this.sort, this.sortBy, this.filter);
        }, 100);
    }

    changeType(t) {
        this.filter.type = t;
        if (t == 2) {
            this.filter.description = -1;
            this.filter.status = 1;
            this.filter.search = '';
        }
        this.meta = {totalCount: 0, pageCount: 0, currentPage: 0, perPage: 20};
        this.getItems(this.page, this.sort, this.sortBy, this.filter);
    }

    formatDate(time) {
        const d = new Date(time * 1000);
        return (d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate());
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

    formatAccount(item) {
        if (this.isByAdmin(item.data)) {
            const j = JSON.parse(item.data);
            return j.user;
        }
        return item.account_id;
    }


    isByAdmin(d) {
        try {
            const j = JSON.parse(d);
            if (typeof j.description === 'undefined') {
                return false;
            } else {
                return true;
            }
        } catch (e) {
            return false;
        }
    }

    isJson(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    filterList() {
        this.meta = {totalCount: 0, pageCount: 0, currentPage: 0, perPage: 20};
        this.getItems(this.page, this.sort, this.sortBy, this.filter);
    }

    add() {
        this.modalService.open(AddPaymentComponent, {size: 'lg', windowClass: 'modal-xl'});
    }

    edit(id) {
        const editModal = this.modalService.open(EditPaymentComponent, {size: 'lg', windowClass: 'modal-xl'});
        editModal.componentInstance.id = id;
    }

    view(id) {
        const viewModal = this.modalService.open(ViewPaymentComponent, {size: 'lg', windowClass: 'modal-xl'});
        viewModal.componentInstance.id = id;
    }

    export() {
        window.open(this.http.withApiBase('payments/export'), '_system');
    }
}


@Component({
    selector: 'app-payment-add-modal',
    templateUrl: './add.component.html',
    styleUrls: ['./payments.component.scss'],
})

export class AddPaymentComponent {
    data = {description: '', user: '', reference_code: '', created_at: {year: '', month: '', day: ''}, amount: null, type: 2};
    isLoading = false;
    title = 'Add New';

    constructor(public activeModal: NgbActiveModal, private http: HttpService, private eventBus: NgEventBus) {
        this.data.user = JSON.parse(localStorage.getItem('__codeart/_ionickv/display_name'));
    }

    save() {
        this.isLoading = true;
        console.log(this.data);
        const date = new Date(this.data.created_at.year + '-' + this.data.created_at.month + '-' + this.data.created_at.day);
        const body = new HttpParams()
            .set('amount', '' + ((this.data.type == 2 ? -1 : 1) * Math.abs(parseInt(this.data.amount))))
            .set('status', '1')
            .set('reference_code', this.data.reference_code)
            .set('type', '' + this.data.type)
            .set('data', JSON.stringify({user: this.data.user, description: this.data.description}))
            .set('created_at', '' + date.getTime() / 1000)
            .set('updated_at', '' + date.getTime() / 1000);

        this.http.post(this.http.withApiBase('payments'), body).subscribe(data => {
            this.isLoading = false;
            this.eventBus.cast('payments:add', this.data);
            this.activeModal.close();
        }, err => {
            this.isLoading = false;
            console.log(err);
        });
    }
}


@Component({
    selector: 'app-payment-edit-modal',
    templateUrl: './add.component.html',
    styleUrls: ['./payments.component.scss'],
})

export class EditPaymentComponent {
    data = {description: '', user: '', reference_code: '', created_at: null, amount: null, type: 2};
    isLoading = true;
    id = 0;
    title = 'Edit';

    constructor(public activeModal: NgbActiveModal, private http: HttpService, private eventBus: NgEventBus) {
        setTimeout(() => {
            this.getData();
        }, 200);
    }

    getData() {
        this.http.get(this.http.withApiBase('payments/' + this.id)).subscribe(data => {
            const parsed_data = JSON.parse(data.data);
            const d = new Date(data.created_at * 1000);
            this.data = {
                description: parsed_data.description,
                user: parsed_data.user,
                reference_code: data.reference_code,
                created_at: {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()},
                amount: data.amount,
                type: data.type
            };
            this.isLoading = false;
        }, err => {
            console.log(err);
            alert('error loading data!');
            this.activeModal.dismiss();
        });
    }

    save() {
        this.isLoading = true;
        console.log(this.data);
        const date = new Date(this.data.created_at.year + '-' + this.data.created_at.month + '-' + this.data.created_at.day);
        const body = new HttpParams()
            .set('amount', '' + ((this.data.type == 2 ? -1 : 1) * Math.abs(parseInt(this.data.amount))))
            .set('status', '1')
            .set('reference_code', this.data.reference_code)
            .set('type', '' + this.data.type)
            .set('data', JSON.stringify({user: this.data.user, description: this.data.description}))
            .set('created_at', '' + date.getTime() / 1000)
            .set('updated_at', '' + date.getTime() / 1000);

        this.http.put(this.http.withApiBase('payments/' + this.id), body).subscribe(data => {
            this.isLoading = false;
            this.eventBus.cast('payments:add', this.data);
            this.activeModal.close();
        }, err => {
            this.isLoading = false;
            console.log(err);
        });
    }
}


@Component({
    selector: 'app-payment-view-modal',
    templateUrl: './view.component.html',
    styleUrls: ['./payments.component.scss'],
})

export class ViewPaymentComponent {
    data = {description: '', user: '', reference_code: '', created_at: null, amount: null, type: 0, status: 0};
    id = 0;

    constructor(public activeModal: NgbActiveModal, private http: HttpService, private eventBus: NgEventBus) {
        setTimeout(() => {
            this.getData();
        }, 200);
    }

    getData() {
        this.http.get(this.http.withApiBase('payments/' + this.id)).subscribe(data => {
            const parsed_data = JSON.parse(data.data);
            let user = data.account_id;
            let description = data.data;
            if (typeof parsed_data.description != 'undefined') {
                description = parsed_data.description;
                user = parsed_data.user
            }
            if (description == '1') {
                description = 'Renewal';
            }
            if (description == '2') {
                description = 'First Payment';
            }
            const d = new Date(data.created_at * 1000);
            this.data = {
                description: description,
                user: user,
                reference_code: data.reference_code,
                created_at: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes(),
                amount: data.amount,
                type: data.type,
                status: data.status
            };
        }, err => {
            console.log(err);
            alert('error loading data!');
            this.activeModal.dismiss();
        });
    }
}

