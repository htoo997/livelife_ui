import { createApp } from 'vue';
import store from './store/';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import './assets/css/custom.css';
import router from './router/';
import LoadScript from "vue-plugin-load-script";
const app = createApp(App);


app
.use(Antd)
.use(router)
.use(store)
.use(LoadScript)
.mount('#app');
