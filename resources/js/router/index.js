import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



import Home from '../components/HomeComponent.vue'
import CategoryList from '../components/pages/category/ListComponent.vue'
import CategoryCrate from '../components/pages/category/CreateComponent'

const routes = new VueRouter({

    //php artisan serve na dile mode history kaj kore na
     mode : 'history',
     routes :[
        {
            path: '/',
            component: Home,
            name: 'home'

        },

        {
            path: '/category',
            component: CategoryList,
            name: 'category'
        },

         {
            path: '/category-create',
            component: CategoryCrate,
            name: 'category-create'
        },

    ]


});

export default routes;