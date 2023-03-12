import { App, Plugin } from 'vue';
import FileUpload from './index.vue';

export const FileUploadPlugin: Plugin = {
    install(app: App) {
        app.component('file-upload', FileUpload);
    }
}

export { FileUpload };