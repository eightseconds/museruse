class Note {
    constructor(col) {
        this.col = col;
        this.cvs = document.getElementById(`${this.col}`);
        this.ctx = this.cvs.getContext('2d');
        this.pos = {
            x: 0,
            y: -this.cvs.height
        }
        this.w = 70;
    }

    drawNote() {
        this.col === 0 || this.col === 5 ?
            this.ctx.fillStyle = '#F9B9B9' :
        this.col === 1 || this.col === 4 ?
            this.ctx.fillStyle = "#5DC9FF" :
            this.ctx.fillStyle = "#FFFC66"

        this.ctx.strokeStyle = '#000000';
        this.ctx.fillRect(70 * this.col, this.pos.y, 70, 20) 
        this.ctx.strokeRect(70 * this.col, this.pos.y, 70, 20) 
    }

    // update() {
    //     this.drawNote();
    // }

}

export default Note;