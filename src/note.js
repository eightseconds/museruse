class Note {
    constructor(col) {
        this.col = col;
        this.cvs = document.getElementById(`${this.col}`);
        this.ctx = this.cvs.getContext('2d');
        this.pos = {
            y: - this.cvs.height * 0.8
        }
    }

    drawNote() {
        this.col > 0 && this.col < 3 ?
            this.ctx.fillStyle = 'rgba(0, 210, 255, .7)' :
            this.ctx.fillStyle = 'rgba(155, 255, 0, .7 )';
        this.ctx.strokeStyle = 'black';

        this.col === 0 ? this.ctx.fillRect(this.cvs.width * .167 * this.col, this.pos.y, this.cvs.width * .167, 10) :
            this.ctx.fillRect(this.cvs.width * .167 * this.col + 5, this.pos.y, this.cvs.width * .167 - 5, 10);

        this.col === 0 ? this.ctx.strokeRect(this.cvs.width * .167 * this.col, this.pos.y, this.cvs.width * .167, 10) :
            this.ctx.strokeRect(this.cvs.width * .167 * this.col + 5, this.pos.y, this.cvs.width * .167 - 5, 10);
    }

}

export default Note;