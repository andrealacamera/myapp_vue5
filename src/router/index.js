import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Gallery from '../views/Gallery'
const routes = [
  {
    path: '/', 
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/gallery',
    component: Gallery
  }  
];

const router = createRouter({
  base: "/myapp_vue5",
  history: createWebHashHistory(), //history implementation
  routes, // short for routes:routes
});


export default router;