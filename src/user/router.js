import Layout from './components/Layout';
import Resumen from './views/Resumen';
import Perfil from './views/Perfil';

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
            }
        ]
    },
];