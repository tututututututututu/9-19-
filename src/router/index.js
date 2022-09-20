import Vue from "vue";
import VueRouter from "vue-router";
import AboutView from "../views/AboutView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:{name:'mymain'},
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    children: [
      {
        path: "/about/mymain",
        name: "mymain",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/MyMain.vue"),
      },
      {
        path: "/about/mytext",
        name: "mytext",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/MyText.vue"),
      },
    ],
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
