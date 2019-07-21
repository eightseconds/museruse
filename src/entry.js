import Game from "./game";

document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext("2d")
    let game = new Game(canvas, context);
    window.game = game;
    game.init();
})