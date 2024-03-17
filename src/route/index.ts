import { createRouter, createWebHashHistory } from "vue-router"

const home = () => import("../Home.vue")

const routes = [
  { path: "/", component: home },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})