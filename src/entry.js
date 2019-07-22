import Game from "./game";

window.addEventListener('load', () => {
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext("2d")
    let game = new Game(canvas, context);
    window.game = game;
    game.init();
})