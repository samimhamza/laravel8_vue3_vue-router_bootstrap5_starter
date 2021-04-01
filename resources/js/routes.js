import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/homePage.vue';
import AboutPage from './pages/aboutPage.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomePage },
        { path: '/about', component: AboutPage },
      
    ]
  });
  
  export default router;

