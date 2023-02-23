import {Component, OnInit} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import * as Chartist from 'chartist';
import {ChartEvent, ChartType} from 'ng-chartist';
import {HttpService} from '../shared/services/http.service';
import {HttpParams} from '@angular/common/http';
import {NgEventBus} from 'ng-event-bus';
import swal from 'sweetalert2';


declare var require: any;


export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}


@Component({
    selector: 'app-masters',
    templateUrl: './masters.component.html',
    styleUrls: ['./masters.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class MastersComponent implements OnInit {
    donutChart: Chart = {
        type: 'Pie',
        data: {
            'series': []
        },
        options: {
            donut: true,
            donutWidth: 60,
            startAngle: 270,
            total: 200,
            showLabel: false,
        },
    };

    items = [];
    displayItems = [];
    isLoading = true;
    filter = {type: '0', search: ''};

    constructor(private http: HttpService, private modalService: NgbModal, private eventBus: NgEventBus) {
        this.eventBus.on('masters:add').subscribe((message) => {
            this.getItems();
        });

    }

    ngOnInit() {
        this.getItems();
    }


    getItems() {
        this.isLoading = true;
        this.http.get(this.http.withApiBase('masters/list')).subscribe(data => {
            this.items = data.map(item => {
                const percents = [];
                if (item.accounts_count === '0') {
                    percents.push(100)
                    percents.push(0)
                } else if (parseInt(item.accounts_count) >= 5) {
                    percents.push(0);
                    percents.push(100)
                } else {
                    const used = parseInt(item.accounts_count) >= 5 ? 5 : parseInt(item.accounts_count);
                    percents.push((5 - used) * 20);
                    percents.push(used * 20);
                }
                item.chart = {
                    'series': percents
                };
                return item;
            });
            this.filterList();
            this.isLoading = false;
        }, error => {
            console.log(error)
        });
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
                    && (item.username ? item.username : '').indexOf(this.filter.search) === -1
                ) {
                    item.visible = false;
                }
                return item;
            });
        }

        if ('' + this.filter.type !== '0') {
            if (this.filter.type === '2') {
                this.items = this.items.map(item => {
                    if (parseInt(item.accounts_count) < 5) {
                        item.visible = false;
                    }
                    return item;
                });
            }

            if (this.filter.type === '1') {
                this.items = this.items.map(item => {
                    if (parseInt(item.accounts_count) >= 5) {
                        item.visible = false;
                    }
                    return item;
                });
            }

        }

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].visible) {
                this.displayItems.push(this.items[i]);
            }
        }


    }

    openAddNewModal() {
        this.modalService.open(AddMasterComponent, {size: 'lg', windowClass: 'modal-xl'});
    }

    view(id) {
        const viewModal = this.modalService.open(ViewMasterComponent, {size: 'lg', windowClass: 'modal-xl'});
        viewModal.componentInstance.id = id;
    }

    edit(id) {
        const editModal = this.modalService.open(EditMasterComponent, {size: 'lg', windowClass: 'modal-xl'});
        editModal.componentInstance.id = id;
    }

    delete(id) {
        swal({
            title: 'Are you sure?',
            text: 'Do you want to delete this item?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No, cancel'
        }).then((isConfirm) => {
            if (isConfirm.value) {
                this.http.delete(this.http.withApiBase('masters/' + id)).subscribe(data => {
                    this.getItems();
                }, err => {
                    console.log(err);
                });
            }
        }).catch(swal.noop);
    }
}


@Component({
    selector: 'app-master-add-modal',
    templateUrl: './add.component.html',
    styleUrls: ['./masters.component.scss'],
})

export class AddMasterComponent {
    data = {email: '', username: '', password: '', due_date: {year: '', month: '', day: ''}, note: ''};
    d2: any;
    isLoading = false;

    constructor(public activeModal: NgbActiveModal, private http: HttpService, private eventBus: NgEventBus) {
    }

    save() {
        this.isLoading = true;
        const body = new HttpParams()
            .set('username', this.data.username)
            .set('password', this.data.password)
            .set('email', this.data.email)
            .set('note', this.data.note)
            .set('due_date', this.data.due_date.year + '-' + this.data.due_date.month + '-' + this.data.due_date.day);

        this.http.post(this.http.withApiBase('masters'), body).subscribe(data => {
            this.isLoading = false;
            this.eventBus.cast('masters:add', this.data);
            this.activeModal.close();
        }, err => {
            this.isLoading = false;
            console.log(err);
        });
    }
}


@Component({
    selector: 'app-master-view-modal',
    templateUrl: './view.component.html',
    styleUrls: ['./masters.component.scss'],
})

export class ViewMasterComponent {
    data: any = {};
    accounts: any = [];
    id = 0;
    isLoading = true;

    constructor(public activeModal: NgbActiveModal, private http: HttpService, private eventBus: NgEventBus) {
        setTimeout(() => {
            this.getData();
        }, 200);
    }

    getData() {
        this.http.get(this.http.withApiBase('masters/' + this.id)).subscribe(data => {
            this.data = data;
            this.http.get(this.http.withApiBase('masters/' + this.id + '/accounts')).subscribe(data2 => {
                this.accounts = data2.sort((a, b) => {
                    return b.status - a.status
                });
            }, err => {
                console.log(err);
            });
        }, err => {
            console.log(err);
            alert('error loading data!');
            this.activeModal.dismiss();
        });
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

    formatDate(time) {
        const d = new Date(time);
        return (d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate());
    }
}

@Component({
    selector: 'app-master-edit-modal',
    templateUrl: './edit.component.html',
    styleUrls: ['./masters.component.scss'],
})

export class EditMasterComponent {
    data: any = {};
    id = 0;
    isLoading = true;

    constructor(public activeModal: NgbActiveModal, private http: HttpService, private eventBus: NgEventBus) {
        setTimeout(() => {
            this.getData();
        }, 200);
    }

    getData() {
        this.http.get(this.http.withApiBase('masters/' + this.id)).subscribe(data => {
            this.data = data;
            const d = new Date(data.due_date);
            this.data.due_date = {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()};
            this.isLoading = false;
        }, err => {
            console.log(err);
            alert('error loading data!');
            this.activeModal.dismiss();
        });
    }

    save() {
        this.isLoading = true;
        const body = new HttpParams()
            .set('username', this.data.username)
            .set('password', this.data.password)
            .set('email', this.data.email)
            .set('note', this.data.note)
            .set('due_date', this.data.due_date.year + '-' + this.data.due_date.month + '-' + this.data.due_date.day);

        this.http.put(this.http.withApiBase('masters/' + this.id), body).subscribe(data => {
            this.isLoading = false;
            this.eventBus.cast('masters:add', this.data);
            this.activeModal.close();
        }, err => {
            this.isLoading = false;
            console.log(err);
        });
    }
}


