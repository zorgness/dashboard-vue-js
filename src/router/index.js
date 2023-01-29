import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../views/HelloWorld.vue";
import Profile from "../views/Profile.vue";
import Schedule from "../views/Schedule.vue";
import Overview from "../views/Overview.vue";
import Chat from "../views/Chat.vue";
import Settings from "../views/Settings.vue";
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
  {
    path: "/helloworld",
    name: "HelloWorld",
    component: HelloWorld,
  },
];
const router = createRouter({
  history: createWebHistory(""),
  routes,
});
export default router;
