import Note from './note';

class Column {
    constructor( col) {
        this.col = col;
        this.cvs = document.getElementById(`${this.col}`);
        this.ctx = this.cvs.getContext("2d");
        this.notes = [];

        this.addNote = this.addNote.bind(this);
        this.drawNotes = this.drawNotes.bind(this);
        this.deleteNotes = this.deleteNotes.bind(this);
    }

    addNote() {
        const note = new Note(this.col);
    }
}

export default Column