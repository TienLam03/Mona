import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage/HomePage.vue';
import AboutPage from '../pages/AboutPage/AboutPage.vue';
import KnowledgePage from '../pages/KnowledgePage/KnowledgePage.vue';
import ContactPage from '../pages/ContactPage/ContactPage.vue';
import ArticleDetailPage from '../pages/KnowledgePage/ArticleDetailPage.vue';
import CustomerPage from '../pages/CustomerPage/CustomerPage.vue';
import ServicePage from '../pages/ServicePage/ServicePage.vue';
import BracePage from '../pages/BracePage/BracePage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/blog', component: KnowledgePage },
    { path: '/blog/:id', component: ArticleDetailPage },
    { path: '/contact', component: ContactPage },
    { path: '/customer', component: CustomerPage },
    { path: '/service', component: ServicePage },
    { path: '/brace', component: BracePage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
