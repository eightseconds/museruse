const VELOCITY = 5


class Note {
    constructor(col) {
        this.col = col;
        
    }

    update() {
        this.pos.y += this.velocity;
        if (this.pos.y === this.cvs.height - 100) {
            this.active = false;
        }
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos.x, this.pos.y, this.w, this.h);
    }

}

export default Note;