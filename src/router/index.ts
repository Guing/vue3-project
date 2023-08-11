import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "home",
      component: () => import("../views/login/Login.vue")
    }
  ]
})

export default router
