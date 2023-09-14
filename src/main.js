/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 import App from "./App.vue";
 
 import { createApp } from "vue";
 import VueCompat from '@vue/compat'
 
 import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
 
 import i18n from "./i18n/index";
 import "bootstrap-vue/dist/bootstrap-vue.css";
 
 
 const app = createApp(App);

 
 app.use(i18n);
 app.use(BootstrapVue);
 app.use(BootstrapVueIcons);
 app.use(VueCompat);
 

 app.mount("#app");