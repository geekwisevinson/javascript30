const cards = createCards();
const root = document.documentElement;
cards.forEach( card => {
    addListeners(card);
});
addStyles(cards);
// console.log('card', cards.length);
root.addEventListener("mousemove", e => {
    console.log(e, e.clientX + 'px' );
    root.style.setProperty('--mouse-x', e.clientX + 20+ 'px');
    root.style.setProperty('--mouse-y', e.clientY + 20 +  'px');
});

function gameLoop() {

    console.log(document.querySelector('.card').style);

}

setTimeout(gameLoop, 1000);
