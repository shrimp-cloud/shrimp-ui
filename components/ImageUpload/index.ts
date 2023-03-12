import { App, Plugin } from 'vue';
import ImageUpload from './index.vue';

export const ImageUploadPlugin: Plugin = {
    install(app: App) {
        app.component('image-upload', ImageUpload);
    }
}

export { ImageUpload };