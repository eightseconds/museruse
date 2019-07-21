
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
        this.state = {
            S: false,
            D: false,
            F: false,
            J: false,
            K: false,
            L: false
        }
        
        this.trackInput = this.trackInput.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.keyUp = this.keyUp.bind(this);
    }

    keyPress(key) {
        if (this.state[key] === false) {
            this.state[key] = true;
            // debugger
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(this.pos.x, this.pos.y - 10, this.w, 10)
        }
    }

    keyUp(key) {
        this.state[key] = false;
        if (this.state[key] === false) {
            // debugger
            this.ctx.clearRect(0, 0, this.w, this.h)
            this.draw();
        } else {
            // debugger
            this.ctx.clearRect(this.pos.x, this.pos.y - 10, this.w, 10)
            this.draw();
        }
    }

    trackInput() {
        document.addEventListener('keydown', (e) => {
            switch(e.keyCode) {
                case 83:
                    this.keyPress('S');
                    break;
                
                case 68:
                    this.keyPress('D');
                    break;
                
                case 70:
                    this.keyPress('F');
                    break;
                
                case 74:
                    this.keyPress('J');
                    break;
                
                case 75:
                    this.keyPress('K');
                    break;
                
                case 76:
                    this.keyPress('L');
                    break;
            }
        })

        document.addEventListener('keyup', (e) => {
            switch (e.keyCode) {
                case 83:
                    this.keyUp('S');
                    break;

                case 68:
                    this.keyUp('D');
                    break;

                case 70:
                    this.keyUp('F');
                    break;

                case 74:
                    this.keyUp('J');
                    break;

                case 75:
                    this.keyUp('K');
                    break;

                case 76:
                    this.keyUp('L');
                    break;
            }
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

    update() {
        this.draw();
    }

}

export default Key;