import Layout from './components/Layout';
import Dashboard from './views/Dashboard';
import UsuariosLista from './views/Usuarios/Lista'
import UsuariosCrear from './views/Usuarios/Crear'
import UsuariosEditar from './views/Usuarios/Editar'

import MascotasLista from './views/Mascotas/Lista'
import MascotasEditar from './views/Mascotas/Editar'

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
                component: Dashboard
            },
            {
                path: 'usuarios',
                name: 'Usuarios',
                component: UsuariosLista,
            },
            {
                path: 'usuarios/crear',
                name: 'UsuariosCrear',
                component: UsuariosCrear,
            },
            {
                path: 'usuarios/:id/editar',
                props: true,
                name: 'UsuariosEditar',
                component: UsuariosEditar,
            },
            {
                path: 'mascotas',
                name: 'Mascotas',
                component: MascotasLista,
            },
            {
                path: 'mascotas/:id/editar',
                name: 'MascotasEditar',
                props: true,
                component: MascotasEditar,
            },
        ]
    },
];