import { App, Plugin } from 'vue';
import Crontab from './index.vue';

export const CrontabPlugin: Plugin = {
    install(app: App) {
        app.component('crontab', Crontab);
    }
}

export { Crontab };