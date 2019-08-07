import Note from './note.js';


// console.log(`counter=${COUNTER}`)
// console.log(`missed=${MISSED}`)
// console.log(COUNTER / MISSED * 100)

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
        // TOTALNOTES ++;
    }

    drawNotes(speed) {
        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height)
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
                if (note.pos.y >= 720 - this.cvs.height * .10 && note.pos.y < this.cvs.height) {
                    pastNotes ++;
                }
            })
        }
        this.notes.splice(0, pastNotes);
    }

}

export default Column