import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

const app = createApp(App);
app.config.globalProperties.$http = axios;

app.use(store);
app.use(router);

app.mount('#app')
