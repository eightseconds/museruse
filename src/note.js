const VELOCITY = 5


class Note {
    constructor(game, x, y, color, letter) {
        this.cvs = game.cvs;
        this.ctx = game.ctx;

        this.w = 70;
        this.h = 10;
        this.pos = {
            x: x,
            y: y,
        }
        this.color = color;
        this.letter = letter;
        this.velocity = VELOCITY;
    }



    update() {
        this.pos.y += this.velocity;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos.x, this.pos.y, this.w, this.h);
    }

}

export default Note;