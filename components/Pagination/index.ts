import { App, Plugin } from 'vue';
import Pagination from './index.vue';

export const PaginationPlugin: Plugin = {
    install(app: App) {
        app.component('pagination', Pagination);
    }
}

export { Pagination };