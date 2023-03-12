import { App, Plugin } from 'vue';
import SvgIcon from './index.vue';

export const SvgIconPlugin: Plugin = {
    install(app: App) {
        app.component('svg-icon', SvgIcon);
    }
}

export { SvgIcon };