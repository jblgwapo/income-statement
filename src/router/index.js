import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../_home/index.vue";

// Tabs

import IncomeStatement from "@/_income_statements/index.vue"
import Charts from "@/_charts/index.vue"
import Reports from "@/_reports/index.vue"
import Settings from "@/_settings/index.vue"




Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Home
  },
  {
    path: "/income",
    name: "Income-Statements",
    component: IncomeStatement
  },
  {
    path: "/charts",
    name: "Charts",
    component: Charts
    },
  {
    path: "/reports",
    name: "Reports",
    component: Reports
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
