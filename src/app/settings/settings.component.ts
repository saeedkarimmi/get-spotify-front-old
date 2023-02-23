import {Component, OnInit} from '@angular/core';
import {HttpService} from '../shared/services/http.service';
import {HttpParams} from '@angular/common/http';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    editorModulesConfig = {
        toolbar: [
            ['bold', 'italic'],
            [{'direction': 'rtl'}],
            ['link']
        ]
    };

    items = [];
    isLoading = true;
    data: any = {};

    constructor(private http: HttpService) {
    }

    ngOnInit() {
        this.getItems();
    }

    getItems() {
        this.http.get(this.http.withApiBase('constants/list')).subscribe(data => {
            this.items = data;
            for (let i = 0; i < this.items.length; i++) {
                this.data[this.items[i].key] = this.items[i].value;
            }
            this.isLoading = false;
        }, error => {
            console.log(error)
        });
    }

    getTitle(key) {
        return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }

    save() {
        this.isLoading = true;

        let body = new HttpParams();

        for (const key in this.data) {
            body = body.set(key, this.data[key]);
        }


        this.http.post(this.http.withApiBase('constants/mass'), body).subscribe(data => {
            this.isLoading = false;
        }, err => {
            this.isLoading = false;
            console.log(err);
        });
    }
}
