import Command from '@ckeditor/ckeditor5-core/src/command';

export default class InsertRowCommand extends Command {
    execute() {
        this.editor.model.change(writer => {
            // Insert <row>*</row> at the current selection position
            // in a way that will result in creating a valid model structure.
            this.editor.model.insertContent(createRow(writer));
        });
    }

    refresh() {
        const model = this.editor.model;
        const selection = model.document.selection;
        const allowedIn = model.schema.findAllowedParent(selection.getFirstPosition(), 'row');

        this.isEnabled = allowedIn !== null;
    }
}

function createRow(writer) {
    const row = writer.createElement('row');
    const rowInner = writer.createElement('rowInner');

    writer.append(rowInner, row);

    return row;
}