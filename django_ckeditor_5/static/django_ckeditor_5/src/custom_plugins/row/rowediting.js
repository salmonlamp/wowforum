import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import {toWidget, toWidgetEditable} from '@ckeditor/ckeditor5-widget/src/utils';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';
import Insertrowcommand from './insertrowcommand'
import './row.css';

export default class Rowediting extends Plugin {

    static get requires() {
        return [Widget];
    }

    init() {
        console.log('RowEditing#init() got called');
        this._defineSchema();
        this._defineConverters();
        this.editor.commands.add('insertRow', new Insertrowcommand(this.editor));
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.register('row', {
            // Behaves like a self-contained object (e.g. an image).
            isObject: true,
            // Allow in places where other blocks are allowed (e.g. directly in the root).
            allowWhere: '$block',
            // Allow content which is allowed in blocks (i.e. text with attributes).
            allowContentOf: '$block',
        });

        schema.register('rowInner', {
            // Cannot be split or left by the caret.
            isLimit: true,
            allowIn: 'row',
            // Allow content which is allowed in the root (e.g. paragraphs).
            allowContentOf: '$root'
        });

    }


    _defineConverters() {
        const conversion = this.editor.conversion;

        // <row> converters
        conversion.for('upcast').elementToElement({
            model: 'row',
            view: {
                name: 'div',
                classes: 'row'
            }
        });
        conversion.for('dataDowncast').elementToElement({
            model: 'row',
            view: {
                name: 'div',
                classes: 'row'
            }
        });
        conversion.for('editingDowncast').elementToElement({
            model: 'row',
            view: (modelElement, {writer: viewWriter}) => {
                const div = viewWriter.createContainerElement('div', {class: 'row'});
                return toWidget(div, viewWriter, {label: 'row box widget'});
            }
        });
        // END <row> converters


        // <rowInner> converters
        conversion.for('upcast').elementToElement({
            model: 'rowInner',
            view: {
                name: 'div',
                classes: 'rowInner'
            }
        });
        conversion.for('dataDowncast').elementToElement({
            model: 'rowInner',
            view: {
                name: 'div',
                classes: 'rowInner'
            }
        });
        conversion.for('editingDowncast').elementToElement({
            model: 'rowInner',
            view: (modelElement, {writer: viewWriter}) => {
                // Note: You use a more specialized createEditableElement() method here.
                const div = viewWriter.createEditableElement('div', {class: 'rowInner'});

                return toWidgetEditable(div, viewWriter);
            }
        });
        // END <rowInner> converters

    }
}