import { App, Plugin } from 'vue';
import Breadcrumb from './index.vue';

export const BreadcrumbPlugin: Plugin = {
    install(app: App) {
        app.component('brandcrumb', Breadcrumb);
    }
}

export { Breadcrumb };