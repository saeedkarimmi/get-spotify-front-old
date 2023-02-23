import {Routes} from '@angular/router';
import {AccountsComponent} from '../../accounts/accounts.component'
import {MastersComponent} from '../../masters/masters.component'
import {PaymentsComponent} from '../../payments/payments.component'
import {SupportComponent} from '../../support/support.component'
import {PackagesComponent} from '../../packages/packages.component';
import {SettingsComponent} from '../../settings/settings.component';
import {TodosComponent} from '../../todos/todos.component';

export const Full_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'accounts',
        component: AccountsComponent,
        data: {
            title: 'Accounts'
        }
    },
    {
        path: 'masters',
        component: MastersComponent,
        data: {
            title: 'Masters'
        }
    },
    {
        path: 'payments',
        component: PaymentsComponent,
        data: {
            title: 'Payments'
        }
    },
    {
        path: 'support',
        component: SupportComponent,
        data: {
            title: 'Support'
        }
    },
    {
        path: 'packages',
        component: PackagesComponent,
        data: {
            title: 'Packages'
        }
    },
    {
        path: 'settings',
        component: SettingsComponent,
        data: {
            title: 'Settings'
        }
    },
    {
        path: 'todos',
        component: TodosComponent,
        data: {
            title: 'Todos'
        }
    },
];
