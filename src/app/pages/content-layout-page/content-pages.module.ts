import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoginPageComponent} from './login/login-page.component'
import {ContentPagesRoutingModule} from './content-pages-routing.module';
import {ContentLayoutPageComponent} from './content-layout-page.component';
import {HttpService} from '../../shared/services/http.service'
import {StorageService} from '../../shared/services/storage.service'
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        ContentLayoutPageComponent,
        LoginPageComponent,
    ]
})
export class ContentPagesModule {
}
