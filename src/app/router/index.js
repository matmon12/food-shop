import { createRouter, createWebHistory } from "vue-router";
import Home from "@/app/views/Home.vue";

const routes = [
  { path: "/food-shop/", name: "Home", component: Home },
];

const router = createRouter({
  mode: history,
  history: createWebHistory(),
  routes,
});

export default router;
