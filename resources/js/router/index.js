import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



import Home from '../components/HomeComponent.vue'
import CategoryList from '../components/pages/category/ListComponent.vue'
import CategoryCrate from '../components/pages/category/CreateComponent'
import CategoryEdit from '../components/pages/category/EditComponent'

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

         {
            path: '/category-edit/:id',
            component: CategoryEdit,
            name: 'category-edit'
        },

    ]


});

export default routes;