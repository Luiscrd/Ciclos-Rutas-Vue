import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
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
                props: ( route ) => {
                    const id = Number(route.params.id)
                    return isNaN( id ) ? { id: 1 } : { id }
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
        name: 'dbz',
        component: () => import(/* webpackChunkName: "DragonBallLayout" */ '@/modules/dbz/layouts/DragonBallLayout.vue'),
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

router.beforeEach((to, from, next) => {
    
    const random = Math.random() * 100

    if( random > 50 ) {
        console.log('Autentifacado')
        next()
    } else {
        console.log(random,'Bloqueado por el beforeEacg Guard')
    }
    
  })

export default router