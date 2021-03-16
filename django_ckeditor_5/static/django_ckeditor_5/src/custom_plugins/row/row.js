import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Rowediting from './rowediting';
import Rowui from './rowui';

export default class Row extends Plugin {
    static get requires() {
        return [Rowediting, Rowui];
    }
}