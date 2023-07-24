import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard'


const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import('@/modules/pokemon/layouts/PokemonLayout.vue'),
        // Rutas hijas (Layouts con páginas hijas)
        children: [
            {
                name: 'pokemon-home',
                path: 'home',
                component: () => import('@/modules/pokemon/pages/ListPage.vue')
            },
            {
                name: 'pokemon-about',
                path: 'about',
                component: () => import('@/modules/pokemon/pages/AboutPage.vue')
            },
            {
                // Parámetros
                name: 'pokemon-id',
                path: 'id/:pokemonId',
                component: () => import('@/modules/pokemon/pages/PokemonPage.vue'),
                props: (route) => {
                    // Recibir props desde la url
                    const pokemonId = Number(route.params.pokemonId)
                    return isNaN(pokemonId) ? { pokemonId: 1 } : { pokemonId }
                }
            },
            // Pagina por defecto (Principal)
            {
                name: 'pokemon',
                path: '',
                redirect: { name: 'pokemon-about' }
            },
        ]
    },

    // DBZ Layout
    {
        name: 'dbz',
        path: '/dbz',
        beforeEnter: [ isAuthenticatedGuard ],
        component: () => import('@/modules/dbz/layouts/DragonBallLayout.vue'),
        // Rutas hijas
        children: [
            {
                name: 'dbz-characters',
                path: 'characters',
                component: () => import('@/modules/dbz/pages/Characters.vue')
            },
            {
                name: 'dbz-about',
                path: 'about',
                component: () => import('@/modules/dbz/pages/About.vue')
            },
            {
                name: 'dbz',
                path: '',
                redirect: { name: 'dbz-characters' }
            }
        ]

    },

    // No page found
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/modules/shared/pages/NoPageFound.vue')
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


// Guard Global - Síncrono
// Autenticación
// router.beforeEach( (to, from, next) => {

//     const random = Math.random() * 100;

//     if ( random > 50 ) {
//         console.log('autenticado')
//         next()
//     } else {
//         console.log(random, 'bloqueado por el beforeEach Guard')
//         next({ name: 'dbz-about' })
//     }

//     // Siguiente página
//     // next();
// })


// Guard Global - Asíncrono
// const canAccess = () => {
//     return new Promise(resolve => {
//         const random = Math.round(Math.random() * 100);
//         if (random > 50) {
//             console.log('autenticado - canAccess')
//             resolve( true )
//         } else {
//             console.log(random, 'bloqueado por el beforeEach Guard - canAccess')
//             resolve( false )
//         }
//     })
// }

// router.beforeEach( async (to, from, next) => {

//     const authorized = await canAccess()

//     authorized 
//         ? next()
//         : next({ name: 'dbz-about' })

// })

export default router