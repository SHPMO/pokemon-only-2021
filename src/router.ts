import { createRouter, createWebHistory } from "vue-router"

import Home from "./pages/Home.vue"
import Schedule from "./pages/home/Schedule.vue"
import Location from "./pages/home/Location.vue"
import Tickets from "./pages/home/Tickets.vue"
import Prizes from "./pages/home/Prizes.vue"
import Events from "./pages/home/Events.vue"
import Booths from "./pages/booth/Booths.vue"
import BoothPage from "./pages/booth/BoothPage.vue"
import AllItems from "./pages/booth/AllItems.vue"
import ItemPage from "./pages/booth/ItemPage.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/schedule", component: Schedule },
  { path: "/location", component: Location },
  { path: "/tickets", component: Tickets },
  { path: "/prizes", component: Prizes },
  { path: "/events", component: Events },
  { name: "booths", path: "/booths", component: Booths },
  { name: "booth", path: "/booths/:id(\\d+)", component: BoothPage },
  { name: "items", path: "/items", component: AllItems },
  { name: "item", path: "/items/:id(\\d+)", component: ItemPage },
]

export const BaseURL = "/pmo2021/"
export const router = createRouter({
  history: createWebHistory(BaseURL),
  routes,
})