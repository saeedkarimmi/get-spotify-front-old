import {Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constData = {
        token: '',
        uid: null,
        displayName: '',
        role: '',
    };

    constructor(private storage: Storage) {
        this.updateConstData();
    }

    public updateConstData() {
        this.storage.get('jwt_token').then(data => {
            this.constData.token = data;
        });
        this.storage.get('uid').then(data => {
            this.constData.uid = data;
        });

        this.storage.get('display_name').then(data => {
            this.constData.displayName = data;
        });
        this.storage.get('role').then(data => {
            this.constData.role = data;
        });

    }

    setToken(token: string) {
        this.storage.set('jwt_token', token);
        this.updateConstData();
    }

    getToken() {
        return this.constData.token;
    }


    setUid(uid: number) {
        this.storage.set('uid', uid);
        this.updateConstData();
    }

    getUid() {
        return this.constData.uid;
    }

    setDisplayName(displayName: string) {
        this.storage.set('display_name', displayName);
        this.updateConstData();
    }

    getDisplayName() {
        return this.constData.displayName;
    }

    setRole(Roles: string) {
        this.storage.set('role', Roles);
        this.updateConstData();
    }

    getRole() {
        return this.constData.role;
    }


    logout() {
        this.storage.remove('uid');
        this.storage.remove('jwt_token');
        this.storage.remove('role');
        this.storage.remove('display_name');
    }

    set(key: string, value: any) {
        this.storage.set(key, value);
    }

    get(key: string) {
        return this.storage.get(key);
    }

    keys() {
        return this.storage.keys();
    }
}
