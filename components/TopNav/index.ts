import { App, Plugin } from 'vue';
import TopNav from './index.vue';

export const TopNavPlugin: Plugin = {
    install(app: App) {
        app.component('top-nav', TopNav);
    }
}

export { TopNav };