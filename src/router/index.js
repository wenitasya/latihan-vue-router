import { createRouter, createWebHistory, useRoute} from "vue-router"
import TDL from '../pages/tdl/index.vue'
import VROUT from '../pages/vrout/index.vue'
import Home from '../pages/index.vue'

const routes = [
    { path: '/', component: Home},
    { path: '/tdl', component: TDL },
    { path: '/vrout', component: VROUT }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;