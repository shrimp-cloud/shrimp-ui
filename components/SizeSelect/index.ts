import { App, Plugin } from 'vue';
import SizeSelect from './index.vue';

export const SizeSelectPlugin: Plugin = {
    install(app: App) {
        app.component('size-select', SizeSelect);
    }
}

export { SizeSelect };