// import { createApp } from 'vue'
// import App from './App.vue'
// import './assets/main.css' // ← Import Tailwind
// // import { OhVueIcon, addIcons } from 'oh-vue-icons'
// // import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'oh-vue-icons/icons'

// // addIcons(FaFacebookF, FaTwitter, FaInstagram, FaPinterestP)

// const app = createApp(App)
// // app.component('v-icon', OhVueIcon)
// app.mount('#app')
// createApp(App).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.min.css';

createApp(App).use(router).mount('#app');
