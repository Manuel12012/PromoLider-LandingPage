// @ts-ignore
import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import AplicationView from "../views/AplicationView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "landing",
      component: MainView,
    },
    {
      path: "/apply",
      name: "application",
      component: AplicationView,
    }                       
  ],        
});

export default router;