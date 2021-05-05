import { createRouter, createWebHistory } from "vue-router"

import Home from "./pages/Home.vue"
import Schedule from "./pages/home/Schedule.vue"
import Location from "./pages/home/Location.vue"
import Tickets from "./pages/home/Tickets.vue"
import Prizes from "./pages/home/Prizes.vue"
import Events from "./pages/home/Events.vue"
import Booths from "./pages/booth/Booths.vue"
import BoothPage from "./pages/booth/BoothPage.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/schedule", component: Schedule },
  { path: "/location", component: Location },
  { path: "/tickets", component: Tickets },
  { path: "/prizes", component: Prizes },
  { path: "/events", component: Events },
  { path: "/booths", component: Booths },
  // { path: "/booths/:id", component: BoothPage },
  // { path: "/items", component: AllItems },
  // { path: "/items/:id", component: ItemPage },
]

export const BaseURL = "/pmo2021/"
export const router = createRouter({
  history: createWebHistory(BaseURL),
  routes,
})