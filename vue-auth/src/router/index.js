import { createWebHistory, createRouter } from "vue-router"
import Login from "@/components/Login.vue"
import Home from "@/components/Home.vue"
import store from '../store'

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        meta: {
            requiresAuth: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, _from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (store.getters.isAuthenticated) {
            next();
            return;
        }
        next({ name: 'Login' });
    } else {
        next();
    }
});

export default router;