import { App, Plugin } from 'vue';
import RightToolbar from './index.vue';

export const RightToolbarPlugin: Plugin = {
    install(app: App) {
        app.component('right-toolbar', RightToolbar);
    }
}

export { RightToolbar };