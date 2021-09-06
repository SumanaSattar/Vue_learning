import { createApp } from 'vue';
import App from './App.vue';
import card from './components/card.vue';

const app = createApp(App);
app.component('card',card);
app.mount('#app');
