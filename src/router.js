import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Games from "./components/Games.vue";
import Learn from "./components/Learn.vue";
import About from "./components/About.vue";
const routes = [
    {path : "/", name : "Home",component: Home},
    {path : "/games", name : "Games",component: Games},
    {path: "/learn", name: "Learn", component: Learn},
    {path: "/about", name: "About", component: About}

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;