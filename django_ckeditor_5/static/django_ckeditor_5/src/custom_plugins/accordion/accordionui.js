import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import objectCenter from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

export default class AccordionUI extends Plugin {
    init() {
        console.log('AccordionUI#init() got called');

        const editor = this.editor;
        const t = editor.t;

        // The "accordion" button must be registered among the UI components of the editor
        // to be displayed in the toolbar.
        editor.ui.componentFactory.add('accordion', locale => {
            // The state of the button will be bound to the widget command.
            const command = editor.commands.get('insertAccordion');

            // The button will be an instance of ButtonView.
            const buttonView = new ButtonView(locale);

            buttonView.set({
                // The t() function helps localize the editor. All strings enclosed in t() can be
                // translated and change when the language of the editor changes.
                label: 'Accordion',
                icon: objectCenter,
                tooltip: true
            });

            // Bind the state of the button to the command.
            buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

            // Execute the command when the button is clicked (executed).
            this.listenTo(buttonView, 'execute', () => editor.execute('insertAccordion'));

            return buttonView;
        });
    }
}