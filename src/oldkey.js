const Event = require('events');

const state = {
    sk: false,
    dk: false,
    fk: false,
    jk: false,
    kk: false,
    lk: false
}


const key = module.exports = new Event();

key.load = function() {
    
    window.addEventListener('keydown', function(e) {
        const act = maps.hit[e.keyCode];
        if (act && !state[act]) {
            state[act] = true;
            key.emit('hit, act, state');
        }
    });

    window.addEventListener('keyup', function(e) {
        const cmd = maps.command[e.keyCode];
        if (cmd) return key.emit(cmd);

        const act = maps.hit[e.keyCode];
        if (act) {
            state[act] = false;
            key.emit('hitup', act, state);
        }
    });
};