import Layout from './components/Layout';
import Resumen from './views/Resumen';
import Perfil from './views/Perfil';
import Mascotas from './views/Mascotas';
import Alertas from './views/Alertas';

export default [
    {
        path: '/user',
        name: 'user',
        component: Layout,
        redirect: {name: 'Resumen'},
        meta: { requiresAuth: true },
        children: [
            {
                path: 'resumen',
                name: 'Resumen',
                component: Resumen,
            },
            {
                path: 'perfil',
                name: 'Perfil',
                component: Perfil
            },
            {
                path: 'mascotas',
                name: 'MisMascotas',
                component: Mascotas
            },
            {
                path: 'alertas',
                name: 'MisAlertas',
                component: Alertas
            }
        ]
    },
];