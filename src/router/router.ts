import { createRouter, createWebHashHistory } from 'vue-router';

const frontPage = () => import('../components/FrontPage.vue')
const machiavelliPage = () => import('../components/pages/Machiavelli.vue')
const testPage2 = () => import('../components/pages/TestPage2.vue')

const routes = [
    { path: '/', component: frontPage },
    { path: '/machiavelli', component: machiavelliPage },
    { path: '/two', component: testPage2 },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;