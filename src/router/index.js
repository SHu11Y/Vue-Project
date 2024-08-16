import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../Components/HomePage.vue';
import AboutPage from '../Components/AboutPage.vue';
import LoginPage from '../Components/LoginPage.vue';
import UserPage from '../Components/UserPage.vue'; // Import UserPage

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/user', // Ensure this path matches the URL you're navigating to
    name: 'UserTable',
    component: UserPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;



