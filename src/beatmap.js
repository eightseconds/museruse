import Column from './column';

class BeatMap {
    constructor(notes0, notes1, notes2, notes3, notes4, notes5, speed) {
        this.startTime = 0;
        this.currentTime = 0;
        this.notes = {
            0: notes0.slice(0),
            1: notes1.slice(0),
            2: notes2.slice(0),
            3: notes3.slice(0),
            4: notes4.slice(0),
            5: notes5.slice(0),
        }
        this.speed = speed;
        
        // debugger
        this.cols = {
            0: new Column(0),
            1: new Column(1),
            2: new Column(2),
            3: new Column(3),
            4: new Column(4),
            5: new Column(5),
        }

        this.addNotes = this.addNotes.bind(this);
        this.keyHit = this.keyHit.bind(this);
    }

    addNotes(colNum) {
        if (this.notes[colNum][0] <= this.currentTime - this.startTime) {
            this.cols[colNum].addNote(colNum);
            this.notes[colNum].shift();
        }
    }

    drawBeatMap() {
        this.cols[0].drawNotes(this.speed);
        this.cols[1].drawNotes(this.speed);
        this.cols[2].drawNotes(this.speed);
        this.cols[3].drawNotes(this.speed);
        this.cols[4].drawNotes(this.speed);
        this.cols[5].drawNotes(this.speed);

        this.currentTime = new Date().getTime();
    }

    keyHit(colNum) {
        this.cols[colNum].deleteNotes();
    }
}

export default BeatMap