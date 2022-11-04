import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import isAuthenticatedGuard from './ahut-guard'

const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout.vue'),
        children: [
            {
                path: 'home',
                name: 'pokemon-list',
                component: () => import(/* webpackChunkName: "PokemonListPage" */ '@/modules/pokemon/pages/ListPage.vue')
            },
            {
                path: 'about',
                name: 'pokemon-about',
                component: () => import(/* webpackChunkName: "PokemonAboutPage" */ '@/modules/pokemon/pages/AboutPage.vue')
            },
            {
                path: 'pokemonid/:id',
                name: 'pokemon-id',
                component: () => import(/* webpackChunkName: "PokemonPageId" */ '@/modules/pokemon/pages/PokemonPage.vue'),
                props: (route) => {
                    const id = Number(route.params.id)
                    return isNaN(id) ? { id: 1 } : { id }
                }
            },
            {
                path: '',
                redirect: { name: 'pokemon-about' }
            },
        ]
    },
    {
        path: '/dbz',
        component: () => import(/* webpackChunkName: "DragonBallLayout" */ '@/modules/dbz/layouts/DragonBallLayout.vue'),
        beforeEnter: [ isAuthenticatedGuard ],
        children: [
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: "DbzCharacters" */ '@/modules/dbz/pages/Characters.vue')
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import(/* webpackChunkName: "DbzAboutPage" */ '@/modules/dbz/pages/About.vue')
            },
            {
                path: '',
                redirect: { name: 'dbz-about' }
            },
        ]
    },
    {
        path: '/:parthMach(.*)*',
        name: 'not-found',
        component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    routes,
})

// router.beforeEach((to, from, next) => {

//     // TODO: Guar araproteger rutas de forma aleatoria

//     const random = Math.random() * 100

//     if( random > 50 ) {
//         console.log('Autentifacado')
//         next()
//     } else {
//         console.log(random,'Bloqueado por el beforeEacg Guard')
//         next({
//             name: 'pokemon-about'
//         })
//     }

//   })

// const canAcces = () => {
//     return new Promise(resolve => {

//         const random = Math.random() * 100

//         if (random > 50) {
//             console.log(random, 'Autentifacado - CanAcces')
//             resolve(true)
//         } else {
//             console.log(random, 'Bloqueado por el beforeEacg Guard - CanAcces')
//             resolve(false)
//         }
//     })
// }

// router.beforeEach( async (to, from, next) => {

//     const authorized = await canAcces()

//     authorized ? next() : next({ name: 'pokemon-about' })
    
// })

export default router