class Note {
    constructor(col) {
        this.col = col;
        this.cvs = document.getElementById(`${this.col}`);
        this.ctx = this.cvs.getContext('2d');
        this.pos = {
            x: 0,
            y: -this.cvs.height
        }
    }

    drawNote() {
        this.ctx.clearRect(0, 0, this.pos.x, this.pos.y)
        this.col === 0 || this.col === 5 ?
            this.ctx.fillStyle = '#F9B9B9' :
        this.col === 1 || this.col === 4 ?
            this.ctx.fillStyle = "#5DC9FF" :
            this.ctx.fillStyle = "#FFFC66"
        this.ctx.strokeStyle = 'black';

        this.col === 0 ? this.ctx.fillRect(this.cvs.width * .167 * this.col, this.pos.y, this.cvs.width * .167, 10) :
            this.ctx.fillRect(this.cvs.width * .167 * this.col + 5, this.pos.y, this.cvs.width * .167 - 5, 10);

        this.col === 0 ? this.ctx.strokeRect(this.cvs.width * .167 * this.col, this.pos.y, this.cvs.width * .167, 10) :
            this.ctx.strokeRect(this.cvs.width * .167 * this.col + 5, this.pos.y, this.cvs.width * .167 - 5, 10);
    }

    update() {
        this.drawNote();
    }

}

export default Note;