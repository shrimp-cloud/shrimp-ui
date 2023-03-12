import { App, Plugin } from 'vue';
import iFrame from './index.vue';

export const iFramePlugin: Plugin = {
    install(app: App) {
        app.component('i-frame', iFrame);
    }
}

export { iFrame };