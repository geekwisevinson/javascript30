console.log(new Visual());

console.log('global', global);

const player = new Visual(100, 100);
function gameLoop() {
    console.log('loop');

    player.moveX(10);
    player.draw();
    window.requestAnimationFrame(gameLoop);
}

gameLoop();
