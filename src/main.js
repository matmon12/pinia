import { createApp } from 'vue'
import App from './App.vue';
import store from "@/store";
import router from "@/router/router.js";
import directives from "@/directives";
import {autoAnimatePlugin} from "@formkit/auto-animate/vue";
import components from "@/components/UI";
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import './index.scss';


const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});



app
  .use(autoAnimatePlugin)
  .use(store)
  .use(router)
  .use(PrimeVue, { unstyled: true })
  .mount('#app')
