import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import DetailView from "../views/DetailView.vue";
import EditView from "../views/EditView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/user",
      name: "user",
      component: UserView,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: DetailView,
      props: true,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditView,
      props: true,
    },
  ],
});
export default router;
