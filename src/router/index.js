import Vue from "vue";
import VueRouter from "vue-router";

import Homepage from "@/pages/Homepage";
import Cadastro from "@/pages/Cadastro";
import Cadastrar from "@/pages/Cadastrar";

Vue.use(VueRouter);

const routes = [
  {
    path: "/cadastrar",
    name: "Cadastrar",
    component: Cadastrar,
  },
  {
    path: "/homepage",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/",
    name: "Cadastro",
    component: Cadastro,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
