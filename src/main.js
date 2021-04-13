// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BootstrapVue from 'bootstrap-vue' //Bootstrap Vue
import 'bootstrap/dist/css/bootstrap.css' //Bootstrap Vue
import 'bootstrap-vue/dist/bootstrap-vue.css' //Bootstrap Vue
import { IconsPlugin } from 'bootstrap-vue' //Bootstrap Vue
import VideoBg from 'vue-videobg' //Video Background Player
import Embed from '/node_overwrites/v-video-embed-ssr.js' // Video Embedding
import axios from 'axios'; // Axios
import VueAxios from 'vue-axios' // Vue Axios
import draggable from 'vuedraggable' // Vue Draggable
import Vue2Img from 'vue-2-img' // Vue2Img
import 'vue-2-img/dist/vue-2-img.css' // Vue2Img

var domain = process.env.DOMAIN || 'http://localhost:8080';
var clientId = process.env.CLIENT_ID || '';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(BootstrapVue) // Bootstrap Vue
  Vue.use(IconsPlugin) // Bootstrap Vue 
  Vue.use(Embed)
  Vue.component('video-bg', VideoBg) //Video Background Player  
  Vue.use(VueAxios, axios) // Vue Axios
  Vue.component('draggable', draggable) // Vue Draggable
}