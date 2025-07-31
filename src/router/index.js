import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage/HomePage.vue';
import AboutPage from '../pages/AboutPage/AboutPage.vue';
import KnowledgePage from '../pages/KnowledgePage/KnowledgePage.vue';
import ContactPage from '../pages/ContactPage/ContactPage.vue';
import ArticleDetailPage from '../pages/KnowledgePage/ArticleDetailPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/blog', component: KnowledgePage },
    { path: '/blog/:id', component: ArticleDetailPage },
    { path: '/contact', component: ContactPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
