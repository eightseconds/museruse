
class Key {
    constructor(game, x, y, color, letter) {
        this.cvs = game.cvs;
        this.ctx = game.ctx;
        this.game = game;
 
        this.w = this.cvs.width / 6;
        this.h = this.cvs.height / 6.66;
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
            this.ctx.fillStyle = '#0074D9';
            this.ctx.fillRect(this.pos.x + num, this.pos.y - 20, this.w, 20)
        }
    }

    keyUp(num, key) {
        this.state[key] = false;
        if ( this.state[key] === false
        ) {
            this.ctx.clearRect(0, 0, this.w, 20);
            this.draw();

        } else {
            // debugger
            this.ctx.clearRect(this.pos.x + num, this.pos.y - 20, this.w, 20)
            this.draw();
        }
    }

    trackInput() {
        let started = false;
        document.addEventListener('keydown', (e) => {
            switch(e.keyCode) {
                case 80: 
                    if (started === false) {
                        this.game.playSong();
                        new Audio('./media/audio/brahmsjs.mp3').play()
                    }
                    started = true;
                    break;

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

    draw() {
        this.ctx.fillStyle = '#b3b3b3';
        this.ctx.fillRect(this.pos.x, this.pos.y - 20, this.w * 6, 20)
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos.x, this.pos.y, this.w, this.h);
        this.ctx.font = '15px Arial'
        this.ctx.fillStyle = "black"
        this.ctx.fillText(this.letter, this.pos.x + 30, this.pos.y + this.pos.y / 16.5)


        this.ctx.strokeStyle = "#b3b3b3"
        this.ctx.beginPath();
        this.ctx.moveTo(this.w, this.cvs.height)
        this.ctx.lineTo(this.w, 0)
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(this.w + 70, this.cvs.height)
        this.ctx.lineTo(this.w + 70, 0)
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(this.w + 140, this.cvs.height)
        this.ctx.lineTo(this.w + 140, 0)
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(this.w + 210, this.cvs.height)
        this.ctx.lineTo(this.w + 210, 0)
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(this.w + 280, this.cvs.height)
        this.ctx.lineTo(this.w + 280, 0)
        this.ctx.stroke();
    }

    update() {
        this.draw();
    }


}

export default Key;