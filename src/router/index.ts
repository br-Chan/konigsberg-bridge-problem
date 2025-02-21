import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import KonigsbergView from "@/views/KonigsbergView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/konigsberg",
            name: "Königsberg bridge problem",
            component: KonigsbergView,
        },
        {
            path: "/home",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/AboutView.vue"),
        },
        {
            path: "/",
            redirect: "/konigsberg",
        },
    ],
});

export default router;
