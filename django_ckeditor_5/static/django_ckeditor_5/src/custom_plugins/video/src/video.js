import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import VideoEditing from "./video/videoediting";
import '../theme/video.css';

export default class Video extends Plugin {
    static get requires() {
        return [VideoEditing];
    }

    static get pluginName() {
        return 'Video';
    }
}
