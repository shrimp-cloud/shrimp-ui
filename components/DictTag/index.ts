import { App, Plugin } from 'vue';
import DictTag from './index.vue';

export const DictTagPlugin: Plugin = {
    install(app: App) {
        app.component('dict-tag', DictTag);
    }
}

export { DictTag };
