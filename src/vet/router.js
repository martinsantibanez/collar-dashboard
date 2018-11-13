import Layout from './components/Layout';
import DashboardView from './views/Dashboard';
import UsuariosView from './views/Usuarios'

export default [
    {
        path: '/vet',
        name: 'vet',
        component: Layout,
        redirect: {name: 'dashboard'},
        meta: { requiresAuth: true },
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: DashboardView
            },
            {
                path: 'usuarios',
                name: 'usuarios',
                component: UsuariosView
            }
        ]
    },
];