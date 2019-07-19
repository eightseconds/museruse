

class Key {
    constructor(game, x, y, color, letter) {
        this.cvs = game.cvs;
        this.ctx = game.ctx;
 
        this.w = 70;
        this.h = 120;
        this.pos = {
            x: x,
            y: y,
        }
        this.color = color;
        this.key = 0;
        this.letter = letter;
        this.trackInput = this.trackInput.bind(this);

    }
    
    trackInput() {
        document.addEventListener('keydown', (e) => {
            
        })
    }

    update() {

    }

    draw() {
        this.ctx.fillStyle = '#b3b3b3';
        this.ctx.fillRect(this.pos.x, this.pos.y - 10, this.w, 10)
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos.x, this.pos.y, this.w, this.h);
        this.ctx.font = '15px Arial'
        this.ctx.fillStyle = "black"
        this.ctx.fillText(this.letter, this.pos.x + 30, this.pos.y + 60)
    }

}

export default Key;