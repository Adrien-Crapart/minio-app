import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import VueSocketIO from 'vue-socket.io';
// import io from 'socket.io-client';
import router from './router'
import store from './store'

// const socket = io('http://localhost:8000');
const app = createApp(App).use(store)

app.use(store);
app.use(router);
// app.use(new VueSocketIO({
//   debug: true,
//   connection: socket,
// }));

app.mount('#app')
