import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root',
})
export class HttpService {


    constructor(private http: HttpClient) {
    }

    private getHeaders(): HttpHeaders {
        let h = new HttpHeaders();
        h = h.set('Content-Type', 'application/x-www-form-urlencoded');
        let token = localStorage.getItem('__codeart/_ionickv/jwt_token');

        if (token) {
            token = JSON.parse(token);
            h = h.set('Authorization', 'Bearer ' + token);
        }
        return h;
    }

    get(url: string, params?: any): Observable<any> {
        return this.http.get(url,
            {
                headers: this.getHeaders(),
                params: params
            }
        ).catch(this.handleError.bind(this));
    }

    post(url: string, data?: HttpParams): Observable<any> {
        return this.http.post(url, data.toString(), {
            headers: this.getHeaders()
        }).catch(this.handleError.bind(this));
    }

    put(url: string, data: HttpParams) {
        return this.http.put(url, data.toString(), {
            headers: this.getHeaders()
        }).catch(this.handleError.bind(this));
    }

    delete(url: string) {
        return this.http.delete(url, {
            headers: this.getHeaders()
        }).catch(this.handleError.bind(this));
    }

    toHttpParams(params) {
        return Object.getOwnPropertyNames(params)
            .reduce((p, key) => p.set(key, params[key]), new HttpParams());
    }

    private handleError(error: any) {

        if (error.status === 401) {

        }

        const errMsg = {
            isJson: false,
            msg: (error.message) ? error.message :
                error.status ? `${error.status} - ${error.statusText}` : 'Server error',
            status: 0
        };
        if (error.status > 200 && error.status < 500 && error.headers.get('Content-Type') === 'application/json') {
            // TODO redirect
            errMsg.isJson = true;
            errMsg.msg = error.json().data;
            errMsg.status = error.status;
        }

        return Observable.throw(errMsg);

    }

    withApiBase(url: string): string {
        const b = 'https://getspotify.ir/api/web/';
        return b + url.trim();
    }
}

