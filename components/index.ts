import { App, Plugin } from 'vue';

import { BreadcrumbPlugin } from './Breadcrumb';
import { CrontabPlugin } from './Crontab';
import { DictTagPlugin } from './DictTag';
import { FileUploadPlugin } from './FileUpload';
import { Hamburger, HamburgerPlugin } from './Hamburger';
// import HeaderSearch from './HeaderSearch';
import { IconSelectPlugin } from './IconSelect';
import { iFramePlugin } from './iFrame';
import { ImagePreviewPlugin } from './ImagePreview';
import { InfoTipsPlugin } from './InfoTips';
import { PaginationPlugin } from './Pagination';
import { RightToolbarPlugin } from './RightToolbar';
import { ScreenfullPlugin } from './Screenfull';
// import SizeSelect from './SizeSelect';
import { SvgIconPlugin } from './SvgIcon';
// import TopNav from './TopNav';
import { TreeSelectPlugin } from './TreeSelect';

const ShrimpUiPlugin: Plugin = {
  install(app: App) {
    BreadcrumbPlugin.install?.(app);
    CrontabPlugin.install?.(app);
    DictTagPlugin.install?.(app);
    FileUploadPlugin.install?.(app);
    HamburgerPlugin.install?.(app);
    IconSelectPlugin.install?.(app);
    iFramePlugin.install?.(app);
    ImagePreviewPlugin.install?.(app);
    InfoTipsPlugin.install?.(app);
    PaginationPlugin.install?.(app);
    RightToolbarPlugin.install?.(app);
    ScreenfullPlugin.install?.(app);
    SvgIconPlugin.install?.(app);
    TreeSelectPlugin.install?.(app);
  },
};

export default ShrimpUiPlugin;

export * from './Breadcrumb';
export * from './Crontab';
export * from './DictTag';
export * from './FileUpload';
export * from './Hamburger';
export * from './IconSelect';
export * from './iFrame';
export * from './ImagePreview';
export * from './InfoTips';
export * from './Pagination';
export * from './RightToolbar';
export * from './Screenfull';
export * from './SvgIcon';
export * from './TreeSelect';