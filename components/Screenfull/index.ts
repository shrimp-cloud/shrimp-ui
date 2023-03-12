import { App, Plugin } from 'vue';
import Screenfull from './index.vue';

export const ScreenfullPlugin: Plugin = {
    install(app: App) {
        app.component('screenfull', Screenfull);
    }
}

export { Screenfull };