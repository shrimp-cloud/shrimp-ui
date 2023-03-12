import { App, Plugin } from 'vue';
import ImagePreview from './index.vue';

export const ImagePreviewPlugin: Plugin = {
    install(app: App) {
        app.component('image-preview', ImagePreview);
    }
}

export { ImagePreview };