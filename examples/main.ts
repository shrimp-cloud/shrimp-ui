import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ShrimpUI from '../es/components';

console.log(ShrimpUI);

const app = createApp(App);
app.use(ElementPlus);
app.use(ShrimpUI);
app.mount('#app');
