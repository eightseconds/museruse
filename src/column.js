import Note from './note.js';

var COUNTER = 0;

class Column {
    constructor(col) {
        this.col = col;
        this.cvs = document.getElementById(`${this.col}`);
        this.cvs.height = window.innerHeight
        this.ctx = this.cvs.getContext("2d");
        this.notes = [];

        this.addNote = this.addNote.bind(this);
        this.drawNotes = this.drawNotes.bind(this);
        this.deleteNotes = this.deleteNotes.bind(this);
        this.handleScoring = this.handleScoring.bind(this);
        this.handleMisses = this.handleMisses.bind(this);
    }

    addNote() {
        const note = new Note(this.col);
        this.notes.push(note);
    }

    drawNotes(comboCounter, speed) {
        let missedScore = {combo: comboCounter};
        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height)
        if (this.notes.length > 0) {
            if (this.notes[0].pos.y > this.cvs.height) {
                missedScore = this.handleMisses(comboCounter);
            }
            this.notes.forEach(note => {
                note.pos.y += speed;
                note.drawNote();
            })
        }
        return missedScore
    }

    handleMisses(comboCounter) {
        let scoring = {points: 0, combo: comboCounter};
        let hitResult = this.handleScoring(this.notes[0], comboCounter);
        scoring.points += hitResult.points;
        hitResult.success === false ? scoring.combo = 0 : scoring.combo++;
        this.notes.splice(0, 1);

        return scoring;
    }

    deleteNotes(comboCounter) {
        let scoring = {points: 0, combo: comboCounter};
        let pastNotes = 0;
        if (this.notes.length > 0) {
            this.notes.forEach(note => {
                // debugger;
                if (note.pos.y >= this.cvs.height * .90 - this.cvs.height * .10) {
                    pastNotes ++;
                    // COUNTER++;
                    let hitResult = this.handleScoring(note, comboCounter);
                    scoring.points += hitResult.points;
                    hitResult.success === false ? scoring.combo = 0 : scoring.combo++;
                }
            })
        }
        this.notes.splice(0, pastNotes);
        // console.log(`progress=${COUNTER / 128 * 100}`)
        return scoring;
    }

    handleScoring(note, combo) {
        let hitResult = { points: null, success: true };
        if (note.perfect()) {
            combo === 0 ? hitResult.points = 20 : hitResult.points = 20 * combo;
        } else if (note.great()) {
            combo === 0 ? hitResult.points = 10 : hitResult.points = 10 * combo;
        } else {
            hitResult.points = 0;
            hitResult.success = false;
        }
        return hitResult
    }

}

export default Column