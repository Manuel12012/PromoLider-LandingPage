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
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});

export default router;