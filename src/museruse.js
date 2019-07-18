const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

ctx.fillStyle = "#F9B9B9";
ctx.fillRect(0, 675, 70, 125);
ctx.fillStyle = "#F7A1A1";
ctx.fillRect(0, 655, 70, 20);
ctx.font = "30px, Arial";
ctx.fillStyle = "#000000";
ctx.fillText('S', 30, 737.5);

ctx.fillStyle = "#5DC9FF";
ctx.fillRect(70, 675, 70, 125);
ctx.fillStyle = "#1AB2FF";
ctx.fillRect(70, 655, 70, 20);
ctx.font = "30px, Arial";
ctx.fillStyle = "#000000";
ctx.fillText('D', 100, 737.5);

ctx.fillStyle = "#FFFC66";
ctx.fillRect(140, 675, 70, 125);
ctx.fillStyle = "#FFFB1A";
ctx.fillRect(140, 655, 70, 20);
ctx.font = "30px, Arial";
ctx.fillStyle = "#000000";
ctx.fillText('F', 170, 737.5);

ctx.fillStyle = "#FFFC66";
ctx.fillRect(210, 675, 70, 125);
ctx.fillStyle = "#FFFB1A";
ctx.fillRect(210, 655, 70, 20);
ctx.font = "30px, Arial";
ctx.fillStyle = "#000000";
ctx.fillText('J', 240, 737.5);

ctx.fillStyle = "#5DC9FF";
ctx.fillRect(280, 675, 70, 125);
ctx.fillStyle = "#1AB2FF";
ctx.fillRect(280, 655, 70, 20);
ctx.font = "30px, Arial";
ctx.fillStyle = "#000000";
ctx.fillText('K', 315, 737.5);

ctx.fillStyle = "#F9B9B9";
ctx.fillRect(350, 675, 70, 125);
ctx.fillStyle = "#F7A1A1";
ctx.fillRect(350, 655, 70, 20);
ctx.font = "30px, Arial";
ctx.fillStyle = "#000000";
ctx.fillText('L', 385, 737.5);

// const key = module.exports = new Event();

// key.load = function() {


    
    window.addEventListener('keydown', function(e) {
        // const act = maps.hit[e.keyCode];
        // if (act && !state[act]) {
        //     state[act] = true;
        //     key.emit('hit, act, state');
        // }
        switch(e.keyCode) {
            case 83:
                ctx.fillStyle = "#F37272"
                ctx.fillRect(0, 655, 70, 20);
                break;
            case 68:
                ctx.fillStyle = "#0088CC"
                ctx.fillRect(70, 655, 70, 20);
                break;
            case 70:
                ctx.fillStyle = "#FFCC00"
                ctx.fillRect(140, 655, 70, 20);
                break;
            case 74:
                ctx.fillStyle = "#FFCC00"
                ctx.fillRect(210, 655, 70, 20);
                break;
            case 75:
                ctx.fillStyle = "#0088CC"
                ctx.fillRect(280, 655, 70, 20);
                break;
            case 76:
                ctx.fillStyle = "#F37272"
                ctx.fillRect(350, 655, 70, 20);
                break;
        }
    })

    window.addEventListener('keyup', function(e) {
        // const cmd = maps.command[e.keyCode];
        // if (cmd) return key.emit(cmd);

        // const act = maps.hit[e.keyCode];
        // if (act) {
        //     state[act] = false;
        //     key.emit('hitup', act, state);
        // }
        switch (e.keyCode) {
            case 83:
                ctx.fillStyle = "#F9B9B9";
                ctx.fillRect(0, 675, 70, 125);
                ctx.fillStyle = "#F7A1A1";
                ctx.fillRect(0, 655, 70, 20);
                ctx.font = "30px, Arial";
                ctx.fillStyle = "#000000";
                ctx.fillText('S', 30, 737.5);
                break;
            case 68:
                ctx.fillStyle = "#5DC9FF";
                ctx.fillRect(70, 675, 70, 125);
                ctx.fillStyle = "#1AB2FF";
                ctx.fillRect(70, 655, 70, 20);
                ctx.font = "30px, Arial";
                ctx.fillStyle = "#000000";
                ctx.fillText('D', 100, 737.5);
                break;
            case 70:
                ctx.fillStyle = "#FFFC66";
                ctx.fillRect(140, 675, 70, 125);
                ctx.fillStyle = "#FFFB1A";
                ctx.fillRect(140, 655, 70, 20);
                ctx.font = "30px, Arial";
                ctx.fillStyle = "#000000";
                ctx.fillText('F', 170, 737.5);
                break;
            case 74:
                ctx.fillStyle = "#FFFC66";
                ctx.fillRect(210, 675, 70, 125);
                ctx.fillStyle = "#FFFB1A";
                ctx.fillRect(210, 655, 70, 20);
                ctx.font = "30px, Arial";
                ctx.fillStyle = "#000000";
                ctx.fillText('J', 240, 737.5);
                break;
            case 75:
                ctx.fillStyle = "#5DC9FF";
                ctx.fillRect(280, 675, 70, 125);
                ctx.fillStyle = "#1AB2FF";
                ctx.fillRect(280, 655, 70, 20);
                ctx.font = "30px, Arial";
                ctx.fillStyle = "#000000";
                ctx.fillText('K', 315, 737.5);
                break;
            case 76:
                ctx.fillStyle = "#F9B9B9";
                ctx.fillRect(350, 675, 70, 125);
                ctx.fillStyle = "#F7A1A1";
                ctx.fillRect(350, 655, 70, 20);
                ctx.font = "30px, Arial";
                ctx.fillStyle = "#000000";
                ctx.fillText('L', 385, 737.5);
                break;
        }

    });
// };