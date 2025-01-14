import { createApp } from 'vue';
import App from './App.vue';
import './assets/icons.css';
import './assets/tailwind.css';
import router from './router';

createApp(App)
  .use(router)
  .mount('#app');
