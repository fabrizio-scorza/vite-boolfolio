import { createApp } from 'vue';

import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';



/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import router
import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Portfolio from './pages/Portfolio.vue';
import Contact from './pages/Contact.vue';

/* add icons to the library */
library.add(fas, far, fab);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/portfolio', component: Portfolio },
        { path: '/contact', component: Contact }
    ]
});

app.use(router).mount('#app');