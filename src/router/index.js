import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Gallery from '../views/Gallery'
import Profile from '../views/Profile'
import Calculator from '../views/Calculator'
import Tensorflow from '../views/Tensorflow'

import store  from '../store/'

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
  },
  {
    path: '/profile',
    component: Profile,
    meta: {middleware : "auth" }
  },
  {
    path: '/calculator',
    component: Calculator,
  },
  {
    path: '/detect',
    component: Tensorflow,
  }    
];

const router = createRouter({
  base: "/myapp_vue5",
  history: createWebHashHistory(), //history implementation
  routes, // short for routes:routes
});

// custom middleware 
router.beforeEach( (to,from,next) => {
  if (to.meta.middleware) {
    const middleware = require(`./middleware/${to.meta.middleware}`);
    middleware.default(next, store);
  } else {
    next();
  }
});

//metodo diretto 
// router.beforeEach( (to, from, next) => {
//   const user = store.state.login.userAuth;
//   if (!user && to.path==='/profile') next({path: '/'})
//   else next()
// })


export default router;
