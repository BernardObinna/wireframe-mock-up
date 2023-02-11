import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: "history",
  // base: process.env.BASE_URL,

  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/products",
      name: "products",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ProductsPage.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "home",
      component: () => import("../views/404Page.vue"),
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/ProductsPage.vue"),
    // },
  ],
});

export default router;
