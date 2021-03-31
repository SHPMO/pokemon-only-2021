import { createRouter, createWebHistory } from "vue-router"

import Home from "./pages/Home.vue"

const routes = [
  { path: "/", component: Home },
  // { path: "/booths/", component: AllBooths },
  // { path: "/booths/:id", component: BoothPage },
  // { path: "/items", component: AllItems },
  // { path: "/items/:id", component: ItemPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})