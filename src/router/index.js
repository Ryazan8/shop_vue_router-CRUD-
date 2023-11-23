import {createRouter, createWebHistory} from 'vue-router'

import Main from "../pages/Main.vue";
import Index from "../pages/shop/Index.vue";
import Show from "../pages/shop/Show.vue";
import Edit from "../pages/shop/Edit.vue";
import Create from "../pages/shop/Create.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Main,
            name: 'main'
        },
        {
            path: '/items',
            component: Index,
            name: 'items.index'
        },
        {
            path: '/items/show/:id',
            component: Show,
            name: 'items.show'
        },
        {
            path: '/items/edit/:id',
            component: Edit,
            name: 'items.edit'
        },
        {
            path: '/items/create',
            component: Create,
            name: 'items.create'
        }

    ]
})

export default router