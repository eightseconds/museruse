import Column from './column';

class BeatMap {
    constructor(notes0, notes1, notes2, notes3, notes4, notes5) {
        let canvas = document.getElementById('canvas')
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

        this.speed = canvas.height / 400;
        
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
        this.scoreCanvas = document.getElementById("outer");
        this.scoreCanvas.height = canvas.height / 1.666
        this.ctx = this.scoreCanvas.getContext("2d");

        this.width = canvas.width / 2
        this.score = 0;
        this.comboCounter = 0;

        // this.displayScore = this.displayScore.bind(this);
    }

    addNotes(colNum) {
        if (this.notes[colNum][0] <= this.currentTime - this.startTime) {
            this.cols[colNum].addNote(colNum);
            this.notes[colNum].shift();
        }
    }

    drawBeatMap() {
        let missedNotes0 = this.cols[0].drawNotes(this.comboCounter, this.speed);
        let missedNotes1 = this.cols[1].drawNotes(this.comboCounter, this.speed);
        let missedNotes2 = this.cols[2].drawNotes(this.comboCounter, this.speed);
        let missedNotes3 = this.cols[3].drawNotes(this.comboCounter, this.speed);
        let missedNotes4 = this.cols[4].drawNotes(this.comboCounter, this.speed);
        let missedNotes5 = this.cols[5].drawNotes(this.comboCounter, this.speed);

        if (missedNotes0.combo === 0 || missedNotes0.combo === 0 || missedNotes1.combo === 0 || missedNotes2.combo === 0 || missedNotes3.combo === 0 || missedNotes4.combo === 0 || missedNotes5.combo === 0) {
            this.comboCounter = 0;
        }

        this.currentTime = new Date().getTime();
        this.displayScore();
    }

    keyHit(colNum) {
        let hitResult = this.cols[colNum].deleteNotes(this.comboCounter);
        this.score += hitResult.points;
        this.comboCounter = hitResult.combo;

        // this.cols[colNum].deleteNotes();
    }

    displayScore() {
        this.ctx.clearRect(0, 0, this.scoreCanvas.clientWidth, this.scoreCanvas.height);
        this.ctx.font = '20px Arial'
        this.ctx.fillText(`Score`, this.scoreCanvas.width * .05, this.scoreCanvas.height * .2);
        this.ctx.fillText(`${this.score}`, this.scoreCanvas.width * .05, this.scoreCanvas.height * .25);
        
        this.ctx.font = '30px Arial'
        this.ctx.textAlign = 'center'
        this.ctx.fillText(`Combo`, this.scoreCanvas.width * .66, this.scoreCanvas.height * .8);
        this.ctx.font = '60px Arial'
        this.ctx.fillText(`${this.comboCounter}`, this.scoreCanvas.width * .66, this.scoreCanvas.height * .95);
    }
}

export default BeatMap