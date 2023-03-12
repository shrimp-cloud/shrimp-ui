import { App, Plugin } from 'vue';
import Hamburger from './index.vue';

export const HamburgerPlugin: Plugin = {
    install(app: App) {
        app.component('hamburger', Hamburger);
    }
}

export { Hamburger };