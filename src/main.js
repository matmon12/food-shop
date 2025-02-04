import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './app/App.vue';
import router from "./app/router";
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import './index.scss';

const app = createApp(App);
const pinia = createPinia();

app
  .use(pinia)
  .use(router)
  .use(PrimeVue, { unstyled: true })
  .mount('#app')
