import { App, Plugin } from 'vue';
import TreeSelect from './index.vue';

export const TreeSelectPlugin: Plugin = {
    install(app: App) {
        app.component('tree-select', TreeSelect);
    }
}

export { TreeSelect };