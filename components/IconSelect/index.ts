import { App, Plugin } from 'vue';
import IconSelect from './index.vue';

export const IconSelectPlugin: Plugin = {
    install(app: App) {
        app.component('icon-select', IconSelect);
    }
}

export { IconSelect };