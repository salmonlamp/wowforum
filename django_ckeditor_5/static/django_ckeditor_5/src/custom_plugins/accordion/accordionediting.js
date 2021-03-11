import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import {toWidget, toWidgetEditable} from '@ckeditor/ckeditor5-widget/src/utils';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';
import InsertAccordionCommand from './insertaccordioncommand'
import './accordion.css';

export default class AccordionEditing extends Plugin {

    static get requires() {
        return [Widget];
    }

    init() {
        console.log('AccordionEditing#init() got called');
        this._defineSchema();
        this._defineConverters();
        this.editor.commands.add('insertAccordion', new InsertAccordionCommand(this.editor));
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.register('accordion', {
            // Behaves like a self-contained object (e.g. an image).
            isObject: true,
            // Allow in places where other blocks are allowed (e.g. directly in the root).
            allowWhere: '$block'
        });

        schema.register('accordionTitle', {
            // Cannot be split or left by the caret.
            isLimit: true,
            allowIn: 'accordion',
            // Allow content which is allowed in blocks (i.e. text with attributes).
            allowContentOf: '$block'
        });

        schema.register('accordionDescription', {
            // Cannot be split or left by the caret.
            isLimit: true,
            allowIn: 'accordion',
            // Allow content which is allowed in the root (e.g. paragraphs).
            allowContentOf: '$root'
        });

        // ADDED
        schema.addChildCheck((context, childDefinition) => {
            if (context.endsWith('accordionDescription') && childDefinition.name == 'accordion') {
                return false;
            }
        });
    }

    /**
    _defineConverters() {
        const conversion = this.editor.conversion;

        conversion.elementToElement({
            model: 'accordion',
            view: {
                name: 'section',
                classes: 'accordion'
            }
        });

        conversion.elementToElement({
            model: 'accordionTitle',
            view: {
                name: 'h1',
                classes: 'accordionTitle'
            }
        });

        conversion.elementToElement({
            model: 'accordionDescription',
            view: {
                name: 'div',
                classes: 'accordionDescription'
            }
        });
    }
     **/


     _defineConverters() {
        const conversion = this.editor.conversion;

        // <accordion> converters
        conversion.for('upcast').elementToElement({
            model: 'accordion',
            view: {
                name: 'section',
                classes: 'accordion'
            }
        });
        conversion.for('dataDowncast').elementToElement({
            model: 'accordion',
            view: {
                name: 'section',
                classes: 'accordion'
            }
        });
        conversion.for('editingDowncast').elementToElement({
            model: 'accordion',
            view: (modelElement, viewWriter) => {
                const section = viewWriter.createContainerElement('section', {class: 'accordion'});
                return toWidget(section, viewWriter, {label: 'accordion box widget'});
            }
        });
        // END <accordion> converters

        // <accordionTitle> converters
        conversion.for('upcast').elementToElement({
            model: 'accordionTitle',
            view: {
                name: 'h3',
                classes: 'accordionTitle'
            }
        });
        conversion.for('dataDowncast').elementToElement({
            model: 'accordionTitle',
            view: {
                name: 'h3',
                classes: 'accordionTitle'
            }
        });
        conversion.for('editingDowncast').elementToElement({
            model: 'accordionTitle',
            view: (modelElement, viewWriter) => {
                // Note: You use a more specialized createEditableElement() method here.
                const h3 = viewWriter.createEditableElement('h3', {class: 'accordionTitle'});

                return toWidgetEditable(h3, viewWriter);
            }
        });
        // END <accordionTitle> converters

        // <accordionDescription> converters
        conversion.for('upcast').elementToElement({
            model: 'accordionDescription',
            view: {
                name: 'div',
                classes: 'accordionDescription'
            }
        });
        conversion.for('dataDowncast').elementToElement({
            model: 'accordionDescription',
            view: {
                name: 'div',
                classes: 'accordionDescription'
            }
        });
        conversion.for('editingDowncast').elementToElement({
            model: 'accordionDescription',
            view: (modelElement, viewWriter) => {
                // Note: You use a more specialized createEditableElement() method here.
                const div = viewWriter.createEditableElement('div', {class: 'accordionDescription'});

                return toWidgetEditable(div, viewWriter);
            }
        });
        // END <accordionDescription> converters
    }
}