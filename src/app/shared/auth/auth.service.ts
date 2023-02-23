import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {StorageService} from '../services/storage.service'
import set = Reflect.set;

@Injectable()
export class AuthService {
    token: string;

    constructor(private storage: StorageService,) {
    }

    signinUser(email: string, password: string) {
        //your code for checking credentials and getting tokens for for signing in user
    }

    logout() {
        this.storage.logout();
    }

    getToken() {
        return this.storage.getToken();
    }

    isAuthenticated() {
        const token = localStorage.getItem('__codeart/_ionickv/jwt_token');
        return !!token;

    }
}
