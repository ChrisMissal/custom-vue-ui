import Vue from 'vue';
import Router from 'vue-router';
import About from './pages/About.vue';
import Resume from './pages/Resume.vue';

import Starter from './pages/StarterPage.vue';
import StarterNavbar from './layout/StarterNavbar.vue';
import StarterFooter from './layout/StarterFooter.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Starter, header: StarterNavbar, footer: StarterFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/about',
      name: 'about',
      components: { default: About, header: StarterNavbar, footer: StarterFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/resume',
      name: 'resume',
      components: { default: Resume, header: StarterNavbar, footer: StarterFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'orange' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
