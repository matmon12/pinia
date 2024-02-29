import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from "@/router/router.js";
import directives from "@/directives";
import {autoAnimatePlugin} from "@formkit/auto-animate/vue";
import components from "@/components/UI";
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'


const app = createApp(App);
const pinia = createPinia()

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});



app
.use(autoAnimatePlugin)
.use(pinia)
.use(router)
.use(PrimeVue, { unstyled: true })
.mount('#app')

import './index.scss';