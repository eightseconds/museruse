
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

    keyPress(num, key) {
        if (this.state[key] === false) {
            this.state[key] = true;
            // debugger
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(this.pos.x + num, this.pos.y - 10, this.w, 10)
        }
    }

    keyUp(num, key) {
        this.state[key] = false;
        if ( this.state[key] === false
            // this.state['S'] === false &&
            // this.state['D'] === false &&
            // this.state['F'] === false &&
            // this.state['J'] === false &&
            // this.state['K'] === false &&
            // this.state['L'] === false
        ) {
            // debugger
            this.ctx.clearRect(this.pos.x + num, this.pos.y - 10, this.w, 10)
            this.draw();
        } else {
            // debugger
            this.ctx.clearRect(0, 0, this.w, 10)
            this.draw();
        }
    }

    trackInput() {
        document.addEventListener('keydown', (e) => {
            switch(e.keyCode) {
                case 83:
                    this.keyPress(0, 'S');
                    break;
                
                case 68:
                    this.keyPress(70, 'D');
                    break;
                
                case 70:
                    this.keyPress(140, 'F');
                    break;
                
                case 74:
                    this.keyPress(210, 'J');
                    break;
                
                case 75:
                    this.keyPress(280, 'K');
                    break;
                
                case 76:
                    this.keyPress(350, 'L');
                    break;
            }
        })

        document.addEventListener('keyup', (e) => {
            switch (e.keyCode) {
                case 83:
                    this.keyUp(0, 'S');
                    break;

                case 68:
                    this.keyUp(70, 'D');
                    break;

                case 70:
                    this.keyUp(140, 'F');
                    break;

                case 74:
                    this.keyUp(210, 'J');
                    break;

                case 75:
                    this.keyUp(280, 'K');
                    break;

                case 76:
                    this.keyUp(350, 'L');
                    break;
            }
        })
    }

    update() {

    }

    draw() {
        this.ctx.fillStyle = '#b3b3b3';
        this.ctx.fillRect(this.pos.x, this.pos.y - 10, this.w * 6, 10)
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