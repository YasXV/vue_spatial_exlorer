import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Games from "./components/Games.vue";
import About from "./components/About.vue";
import Episodes from "./components/Episodes.vue";
import Locations from "./components/Locations.vue";
import Characters from "./components/Characters.vue";

const routes = [
    {path : "/", name : "Home",component: Home},
    {path : "/games", name : "Games",component: Games},
    {path: "/episodes", name: "Episodes", component: Episodes},
    {path: "/locations", name: "Locations", component : Locations},
    {path: "/characters", name: "Characters", component: Characters},
    {path: "/about", name: "About", component: About}

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;