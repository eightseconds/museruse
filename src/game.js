import Key from './key';

const COLORS = {
    RED: "#F9B9B9",
    BLUE: "#5DC9FF",
    YELLOW: "#FFFC66",
}

class Game {
    constructor(cvs, ctx) {
        this.cvs = cvs;
        this.ctx = ctx;
    
        this.keys = [];
        this.notes = [];

        this.init = this.init.bind(this);
        // this.loop = this.loop.bind(this);
    }

    init() {
        const offset = 70;
        this.keys.push(new Key(game, this.cvs.width / 2 - 70 * 3 , this.cvs.height - 120, COLORS['RED'], 'S'));
        this.keys.push(new Key(game, this.cvs.width / 2 - 70 * 3 + offset, this.cvs.height - 120, COLORS['BLUE'], 'D'));
        this.keys.push(new Key(game, this.cvs.width / 2 - 70 * 3 + (offset * 2), this.cvs.height - 120, COLORS['YELLOW'], 'F'));
        this.keys.push(new Key(game, this.cvs.width / 2 - 70 * 3 + (offset * 3), this.cvs.height - 120, COLORS['YELLOW'], 'J'));
        this.keys.push(new Key(game, this.cvs.width / 2 - 70 * 3 + (offset * 4), this.cvs.height - 120, COLORS['BLUE'], 'K'));
        this.keys.push(new Key(game, this.cvs.width / 2 - 70 * 3 + (offset * 5), this.cvs.height - 120, COLORS['RED'], 'L'));

        this.draw()
        this.keys[0].trackInput();  
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
        this.keys.forEach(key => key.draw());    
        this.notes.forEach(note => note.draw());
    }
    
    update(){
        this.keys.forEach(key => key.update());
    }
    
    // loop() {
    //     this.update();
    //     this.draw();
    //     window.requestAnimationFrame(this.loop);
    // }
}

export default Game