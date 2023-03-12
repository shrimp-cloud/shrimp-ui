import { App, Plugin } from 'vue';
import InfoTips from './index.vue';

export const InfoTipsPlugin: Plugin = {
    install(app: App) {
        app.component('info-tips', InfoTips);
    }
}

export { InfoTips };