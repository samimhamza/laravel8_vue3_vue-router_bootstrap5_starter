import { createApp } from 'vue';

import routes from './routes.js';

import App from './App.vue';

//import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App);

app.use(routes);

app.mount('#app');