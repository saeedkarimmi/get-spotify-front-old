import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {HttpService} from '../../../shared/services/http.service';
import {StorageService} from '../../../shared/services/storage.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})

export class LoginPageComponent {

    loginData = {username: '', password: ''};
    loginError = false;
    isLoading = false;

    constructor(private router: Router, public http: HttpService, public storage: StorageService) {
    }

    login() {
        this.isLoading = true;
        const body = new HttpParams()
            .set('username', this.loginData.username)
            .set('password', this.loginData.password);
        this.http.post(this.http.withApiBase('auth/login'), body).subscribe(data => {
            this.storage.setToken(data.token);
            setTimeout(() => {
                this.http.get(this.http.withApiBase('auth/me')).subscribe(data2 => {
                    this.storage.setDisplayName(data2.username);
                    this.storage.setRole(data2.role);
                    this.storage.setUid(data2.id);
                    this.isLoading = false;
                    this.router.navigateByUrl('/dashboard');
                });
            }, 2000)

        }, error => {
            this.isLoading = false;
            this.loginError = true;
        })
    }
}
