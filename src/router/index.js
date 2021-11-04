import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/BMITest.vue";
import About from "../views/About.vue";
import Guide from "../views/Guide.vue";
import CRUD from "../views/CRUD.vue";
import ABC from "../components/HelloWorld.vue";
import CRUDjson from "../views/CRUDjson.vue";
import CRUDLocalStorage from "../views/CRUDLocalStorage.vue" 
import CRUDFirestore from "../views/CRUDFirestore.vue" 


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/abc",
    name: "ABC",
    component: ABC,
  },
  {
    path: "/guide",
    name: "Guide",
    component: Guide,
  },
  {
    path: "/crud",
    name: "CRUD",
    component: CRUD,
  },
  {
    path: "/crudfirestore",
    name: "CRUDFirestore",
    component: CRUDFirestore,
  },
  {
    path: "/crudlocalstorage",
    name: "CRUDLocalStorage",
    component: CRUDLocalStorage,
  },
  {
    path: "/crudjson",
    name: "Crudjson",
    component: CRUDjson,  
  },
  {
    path: "/about",
    name: "About",
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  // base: "/ite",
});

export default router;
