import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './login/login-page.component';

import {ContentLayoutPageComponent} from './content-layout-page.component';
import {StorageService} from '../../shared/services/storage.service'

const routes: Routes = [
        {
            path: '',
            children: [

                {
                    path: 'login',
                    component: LoginPageComponent,
                    data: {
                        title: 'Login Page'
                    }
                }
            ]
        }
    ]
;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [StorageService]
})
export class ContentPagesRoutingModule {
}
