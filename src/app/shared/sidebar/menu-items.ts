import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '', title: 'Personal', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
      path: '/dashboard', title: 'Dashboard', icon: 'mdi mdi-gauge', class: '', label: '', labelClass: '', extralink: false, submenu: []
    },
    {
        path: '', title: 'Operations', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
        path: '', title: 'Challan', icon: 'mdi mdi-bullseye', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            {
              path: '/create-challan',
              title: 'Create ', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/challans', title: 'List', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
        ]
    },
    {
      path: '/payment', title: 'Payment', icon: 'mdi mdi-currency-inr', class: '', label: '', labelClass: '', extralink: false, submenu: []
    },
    {
      path: '/reports', title: 'Reports', icon: 'mdi mdi-chart-bar', class: '', label: '', labelClass: '', extralink: false, submenu: []
    }
];

