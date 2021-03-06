import Vue from 'vue';
import VueRouter from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue';
// import Carrito from './components/Carrito.vue'
// import Info from './components/Info.vue'
// import Listado from './components/Listado.vue'
// import Login from './components/Login.vue'
// import Registro from './components/Registro.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: 'helloWorld',
            component: () => import('./views/HelloWorld.vue')
        },
        {
            path:'/productos',
            name:'productos',
            component: ()   => import('./views/ProductosView.vue')
        },
        {
            path:'/carrito',
            name:'carrito',
            component: ()   => import('./views/CarritoView.vue')
        },
        {
            path:'/producto/:id',
            name:'producto',
            component: ()  => import('./views/ProductoView.vue')
        },
        {
            path:'/login',
            name:'login',
            component: ()   => import('./views/LoginView.vue')
        },
        {
            path:'/registro',
            name:'registro',
            component:  ()   => import('./views/Registro.vue')
        }
    ]
})