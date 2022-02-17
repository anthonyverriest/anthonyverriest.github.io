import { createRouter, createWebHashHistory } from 'vue-router';

const testPage1 = () => import('../components/pages/TestPage.vue')
const testPage2 = () => import('../components/pages/TestPage2.vue')

const routes = [
    { path: '/one', component: testPage1 },
    { path: '/two', component: testPage2 },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;