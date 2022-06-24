import { createRouter, createWebHistory } from 'vue-router'
//import Transaction from '../views/TransactionPage.vue'
const routes = [
  {
    path: '/',
    icon : 'line-chart-outlined',
    name: 'Dashboard',
    display: 1,
    children: [],
    component: () => import(/* webpackChunkName: "about" */ '../views/DashboardPage.vue')
  },{
    path: '/transactions/:user',
    icon : 'file-protect-outlined',
    name: 'Transaction',
    display: 0,
    children: [],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:  () => import(/* webpackChunkName: "about" */ '../views/TransactionPage.vue')
  },{
    path: '/cards/customer/:id',
    icon : 'audit-outlined',
    name: 'UserDetail',
    display: 0,
    children : [],
    component:  () => import(/* webpackChunkName: "about" */ '../views/UserDetailPage.vue')
  },{
    path: '/roles',
    icon : 'audit-outlined',
    name: 'roles',
    display: 1,
    children : [],
    component:  () => import(/* webpackChunkName: "about" */ '../views/RolesPage.vue')
  },{
    path : '/cards',
    icon : 'audit-outlined',
    name : 'Cards',
    display: 1,
    component : () => import(/* webpackChunkName: "about" */ '../views/CardsPage.vue'),
    children: [{
      path: 'customer',
      suffix : '/cards/',
      component:  () => import(/* webpackChunkName: "about" */ '../views/CardsCustomerPage.vue'),
      icon : 'user-outlined',
      name: 'Customer Card',
      display: 1,
      
    },{
      path: 'employee',
      suffix : '/cards/',
      component:  () => import(/* webpackChunkName: "about" */ '../views/CardsEmployeePage.vue'),
      icon : 'user-outlined',
      name: 'Employee Card',
      display: 1,
    }]
  },{
    path: '/login',
    icon : '',
    name: 'login',
    display: 0,
    children : [],
    component:  () => import(/* webpackChunkName: "about" */ '../views/LoginPage.vue')
  },{
    path: '/Profile',
    icon : '',
    name: 'Profile',
    display: 0,
    children : [],
    component:  () => import(/* webpackChunkName: "about" */ '../views/ProfilePage.vue')
  },{
    path: '/logout',
    icon : 'logout-outlined',
    name: 'Logout',
    display: 1,
    children : [],
    component: {
      beforeRouteEnter(to, from, next) {
        console.log({ from });
        const destination = {
          path: "/login",
          query: from.query,
          params: from.params,
          
        };
        if (!from) {
          console.log("no from");
        }
        console.log("running before hook");
        // store.dispatch("TOGGLE_MODAL");
        next(destination);
      }
    }
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  strict: true,
})
export default router