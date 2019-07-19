import Key from './key';
import Note from './note';

const GAME_PLAYING = 'GAME_PLAYING'

const KEYS = {
    S: 83,
    D: 68,
    F: 70,
    J: 74,
    K: 75,
    L: 76,
}

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
        this.loop = this.loop.bind(this);
    }

    init() {
        const offset = 70;
        this.keys.push(new Key(game, this.cvs.width / 2 - 70 * 3 , this.cvs.height - 120, COLORS['RED'], 'S'));
        this.keys.push(new Key(game, this.cvs.width / 2 - 70 * 3 + offset, this.cvs.height - 120, COLORS['BLUE'], 'D'));
        this.keys.push(new Key(game, this.cvs.width / 2 - 70 * 3 + (offset * 2), this.cvs.height - 120, COLORS['YELLOW'], 'F'));
        this.keys.push(new Key(game, this.cvs.width / 2 - 70 * 3 + (offset * 3), this.cvs.height - 120, COLORS['YELLOW'], 'J'));
        this.keys.push(new Key(game, this.cvs.width / 2 - 70 * 3 + (offset * 4), this.cvs.height - 120, COLORS['BLUE'], 'K'));
        this.keys.push(new Key(game, this.cvs.width / 2 - 70 * 3 + (offset * 5), this.cvs.height - 120, COLORS['RED'], 'L'));

        this.notes.push(new Note(game, this.cvs.width / 2 - 70 * 3, this.cvs.height - 400, COLORS['RED'], 'S'));
        this.notes.push(new Note(game, this.cvs.width / 2 - 70 * 3, this.cvs.height - 500, COLORS['RED'], 'S'));
        this.notes.push(new Note(game, this.cvs.width / 2 - 70 * 3, this.cvs.height - 700, COLORS['RED'], 'S'));
        this.notes.push(new Note(game, this.cvs.width / 2 - 70 * 3, this.cvs.height - 200, COLORS['RED'], 'S'));
        this.notes.push(new Note(game, this.cvs.width / 2 - 70 * 3, this.cvs.height - 900, COLORS['RED'], 'S'));
        this.notes.push(new Note(game, this.cvs.width / 2 - 70 * 3, this.cvs.height - 1000, COLORS['RED'], 'S'));
        this.notes.push(new Note(game, this.cvs.width / 2 - 70 * 3, this.cvs.height - 1100, COLORS['RED'], 'S'));
        this.notes.push(new Note(game, this.cvs.width / 2 - 70 * 3, this.cvs.height - 500, COLORS['RED'], 'S'));
        this.loop();
        this.keys[0].trackInput();
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
        this.keys.forEach(key => key.draw());    
        this.notes.forEach(note => note.draw());
    }
    
    update(){
        this.keys.forEach(key => key.update());    
        this.notes.forEach(note => note.update());    
    }
    
    loop() {
        this.update();
        this.draw();
        window.requestAnimationFrame(this.loop);
    }
}

export default Game