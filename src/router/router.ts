import { createRouter, createWebHashHistory } from 'vue-router';

const frontPage = () => import('../components/FrontPage.vue')
const machiavelliPage = () => import('../components/pages/Machiavelli.vue')
const copywritingPage = () => import('../components/pages/Copywriting.vue')

export enum Pages {
    Machiavelli = '/Machiavelli',
    Copywriting = '/Copywriting',
}

const routes = [
    { path: '/', component: frontPage },
    { path: Pages.Machiavelli, component: machiavelliPage },
    { path: Pages.Copywriting, component: copywritingPage },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});



export default router;