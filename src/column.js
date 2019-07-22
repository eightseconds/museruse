import Note from './note.js';

class Column {
    constructor(col) {
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
        this.notes.push(note);
    }

    drawNotes(speed) {
        if (this.notes.length > 0) {
            this.notes.forEach(note => {
                note.pos.y += speed;
                note.drawNote();
            })
        }
    }

    deleteNotes() {
        let pastNotes = 0;
        if (this.notes.length > 0) {
            this.notes.forEach(note => {
                if (note.pos.y >= 680) {
                    pastNotes ++;
                }
            })
        }
        this.notes.splice(0, pastNotes);
    }
}

export default Column