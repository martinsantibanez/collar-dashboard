import Layout from './components/Layout';
import Dashboard from './views/Dashboard';
import UsuariosLista from './views/Usuarios/Lista'
import UsuariosCrear from './views/Usuarios/Crear'
import UsuariosVer from './views/Usuarios/Ver'
import UsuariosEditar from './views/Usuarios/Editar'
import UsuariosMascotas from './components/MascotasUsuario'
import UsuariosMascotasCrear from './views/Usuarios/MascotasCrear'

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
                path: 'usuarios/:id',
                props: true,
                name: 'UsuariosVer',
                component: UsuariosVer,
            },
            {
                path: 'usuarios/:id/editar',
                props: true,
                name: 'UsuariosEditar',
                component: UsuariosEditar,
            },
            {
                path: 'usuarios/:id_usuario/mascotas',
                props: true,
                name: 'UsuariosMascotas',
                component: UsuariosMascotas,
            },
            {
                path: 'usuarios/:id/mascotas/crear',
                props: true,
                name: 'UsuariosMascotasCrear',
                component: UsuariosMascotasCrear,
            },
            {
                path: 'usuarios/:id/mascotas/:id_mascota/editar',
                props: true,
                name: 'UsuariosMascotasEditar',
                component: MascotasEditar,
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