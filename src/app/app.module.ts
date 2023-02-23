import {BrowserModule} from '@angular/platform-browser';
import {IonicStorageModule} from '@ionic/storage';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {AppComponent} from './app.component';
import {ContentLayoutComponent} from './layouts/content/content-layout.component';
import {FullLayoutComponent} from './layouts/full/full-layout.component';

import {AuthService} from './shared/auth/auth.service';
import {AuthGuard} from './shared/auth/auth-guard.service';
import {HttpService} from './shared/services/http.service';
import {StorageService} from './shared/services/storage.service';
import {
    AccountsComponent,
    AddAccountComponent,
    EditAccountComponent,
    ViewAccountComponent,
    MassMessageComponent
} from './accounts/accounts.component';
import {MastersComponent, AddMasterComponent, ViewMasterComponent, EditMasterComponent} from './masters/masters.component';
import {PaymentsComponent, AddPaymentComponent, EditPaymentComponent, ViewPaymentComponent} from './payments/payments.component';
import {SupportComponent} from './support/support.component';
import {FormsModule} from '@angular/forms';
import {NgEventBus} from 'ng-event-bus';
import {PackagesComponent, EditPackageComponent, AddPackageComponent} from './packages/packages.component';
import {QuillModule} from 'ngx-quill';
import {SettingsComponent} from './settings/settings.component';
import {TodosComponent, RegisterationCheckComponent} from './todos/todos.component'


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelPropagation: false
};

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
    declarations: [AppComponent, FullLayoutComponent, ContentLayoutComponent, AccountsComponent,
        MastersComponent, PaymentsComponent, SupportComponent, AddMasterComponent, ViewMasterComponent,
        EditMasterComponent, AddPaymentComponent, EditPaymentComponent, ViewPaymentComponent,
        PackagesComponent, EditPackageComponent, AddPackageComponent, SettingsComponent,
        AddAccountComponent, EditAccountComponent, ViewAccountComponent, MassMessageComponent, TodosComponent,
        RegisterationCheckComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        IonicStorageModule.forRoot({
            name: '__codeart',
            driverOrder: ['localstorage']
        }),
        NgbModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        PerfectScrollbarModule,
        FormsModule,
        QuillModule
    ],
    providers: [
        AuthService,
        AuthGuard,
        HttpService,
        StorageService,
        NgEventBus,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        AddMasterComponent, ViewMasterComponent, EditMasterComponent, EditPackageComponent, AddPackageComponent,
        AddPaymentComponent, EditPaymentComponent, ViewPaymentComponent, AddAccountComponent, EditAccountComponent,
        ViewAccountComponent, MassMessageComponent, RegisterationCheckComponent
    ]
})
export class AppModule {
}
