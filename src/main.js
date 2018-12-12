
import 'babel-polyfill';
//https://golb.hplar.ch/2018/01/Bundling-web-applications-with-Parcel.html
import 'es6-promise-polyfill';
//https://www.npmjs.com/package/es6-promise-polyfill
// required for ie11 https://github.com/sweetalert2/sweetalert2

import Vue from 'vue';



//vue-tour
//https://alligator.io/vuejs/vue-guide-vue-tour/
import VueTour from 'vue-tour';
import 'vue-tour/dist/vue-tour.css';
Vue.use(VueTour);

import VueSweetalert2 from 'vue-sweetalert2';
import statusWidget from './components/statusWidget.vue'

// routes
// import routes
import VueRouter from 'vue-router';
import { routes } from './routes.js';
// setup the router
Vue.use(VueRouter);


const router = new VueRouter({
  routes
})


// main.js is one place where we can import components

// import syntax looks like this for a global import

Vue.component("status-widg", statusWidget);

//register an event bus to act as a way to pass info between components
//https://alligator.io/vuejs/global-event-bus/
export const eventBus = new Vue();

import App from './App.vue';


Vue.use(VueSweetalert2);

// notice router is added as a key
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

