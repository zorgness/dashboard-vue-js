import { createRouter, createWebHistory } from "vue-router";
import Profile from "../views/Profile.vue";
const Schedule = () => import("../views/Schedule.vue");
const Overview = () => import("../views/Overview.vue");
const Chat = () => import("../views/Chat.vue");
const Settings = () => import("../views/Settings.vue");
const routes = [
  {
    path: "/",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule,
  },
  {
    path: "/overview",
    name: "Overview",
    component: Overview,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
];
const router = createRouter({
  history: createWebHistory(""),
  routes,
});
export default router;
