import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../shared/services/http.service'
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgEventBus} from 'ng-event-bus';
import {HttpParams} from '@angular/common/http';
import {QuillEditorComponent} from 'ngx-quill';

@Component({
    selector: 'app-packages',
    templateUrl: './packages.component.html',
    styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
    items = [];
    displayItems = [];
    isLoading = true;

    constructor(private http: HttpService, private modalService: NgbModal, private eventBus: NgEventBus) {
        this.eventBus.on('packages:add').subscribe((message) => {
            this.items = this.displayItems = [];
            this.isLoading = true;
            this.getItems();
        });
    }

    ngOnInit() {
        this.getItems();
    }


    getItems() {
        this.http.get(this.http.withApiBase('packages')).subscribe(data => {
            this.items = this.displayItems = data;
            this.isLoading = false;
        }, error => {
            console.log(error)
        });
    }

    edit(id) {
        const editModal = this.modalService.open(EditPackageComponent, {size: 'lg', windowClass: 'modal-xl'});
        editModal.componentInstance.id = id;
    }

    add() {
        this.modalService.open(AddPackageComponent, {size: 'lg', windowClass: 'modal-xl'});
    }
}


@Component({
    selector: 'app-package-edit-modal',
    templateUrl: './edit.component.html',
    styleUrls: ['./packages.component.scss'],
})

export class EditPackageComponent {
    data: any = {};
    id = 0;
    isLoading = true;
    title = 'Edit';
    editorModulesConfig = {
        toolbar: [
            ['bold', 'italic'],
            [{'direction': 'rtl'}],
            ['link']
        ]
    };

    constructor(public activeModal: NgbActiveModal, private http: HttpService, private eventBus: NgEventBus) {
        setTimeout(() => {
            this.getData();
        }, 200);
    }

    getData() {
        this.http.get(this.http.withApiBase('packages/' + this.id)).subscribe(data => {
            this.data = data;
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
        const body = new HttpParams()
            .set('info', this.data.info)
            .set('name', this.data.name)
            .set('duration_days', this.data.duration_days)
            .set('price', this.data.price);

        this.http.put(this.http.withApiBase('packages/' + this.id), body).subscribe(data => {
            this.isLoading = false;
            this.eventBus.cast('packages:add', this.data);
            this.activeModal.close();
        }, err => {
            this.isLoading = false;
            console.log(err);
        });
    }
}


@Component({
    selector: 'app-package-add-modal',
    templateUrl: './edit.component.html',
    styleUrls: ['./packages.component.scss'],
})

export class AddPackageComponent {
    data = {info: '', name: '', duration_days: '', price: ''};
    isLoading = false;
    title = 'Add New';

    editorModulesConfig = {
        toolbar: [
            ['bold', 'italic'],
            [{'direction': 'rtl'}],
            ['link']
        ]
    };

    constructor(public activeModal: NgbActiveModal, private http: HttpService, private eventBus: NgEventBus) {

    }

    save() {
        this.isLoading = true;
        console.log(this.data);
        const body = new HttpParams()
            .set('info', this.data.info)
            .set('name', this.data.name)
            .set('duration_days', this.data.duration_days)
            .set('price', this.data.price);

        this.http.post(this.http.withApiBase('packages'), body).subscribe(data => {
            this.isLoading = false;
            this.eventBus.cast('packages:add', this.data);
            this.activeModal.close();
        }, err => {
            this.isLoading = false;
            console.log(err);
        });
    }
}
