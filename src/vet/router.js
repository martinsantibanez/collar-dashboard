import Layout from './components/Layout';
import DashboardView from './views/Dashboard';
import UsuariosView from './views/Usuarios'

export default [
    {
        path: '/vet',
        name: 'vet',
        component: Layout,
        redirect: {name: 'Dashboard'},
        meta: { requiresAuth: true },
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: DashboardView
            },
            {
                path: 'usuarios',
                name: 'Usuarios',
                component: UsuariosView
            }
        ]
    },
];