import {RouteInfo} from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {path: '/dashboard', title: 'Dashboard', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: []},
    {path: '/accounts', title: 'Accounts', icon: 'ft-user', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: []},
    {path: '/masters', title: 'Masters', icon: 'ft-users', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: []},
    {path: '/payments', title: 'Payments', icon: 'ft-credit-card', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: []},
    {path: '/packages', title: 'Packages', icon: 'ft-package', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: []},
    {path: '/settings', title: 'Settings', icon: 'ft-settings', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: []},
    {
        path: '/support',
        title: 'Support',
        icon: 'ft-message-square',
        class: '',
        badge: '',
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
        isExternalLink: true,
        submenu: []
    },
    {path: '/todos', title: 'To Do', icon: 'ft-check-square', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: []},

];
