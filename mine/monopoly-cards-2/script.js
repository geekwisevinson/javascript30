//region Const
const state = {};
const moneyCards = [
    [6, '1M', 'money'],
    [5, '2M'],
    [3, '3M'],
    [3, '4M'],
    [2, '5M'],
    [1, '10M']
];
const actionCards = [
    [2, 'Deal Breakers', 'action'],
    [3, 'Just Say No'],
    [10, 'Pass Go'],
    [3, 'Forced Deal'],
    [3, 'Sly Deal'],
    [3, 'Debt Collector'],
    [3, 'It\'s My Birthday'],
    [2, 'Double Rent'],
    [3, 'Houses'],
    [2, 'Hotels'],
];
const rentCards = [
    [2, 'Dark Blue/Green', 'rent'],
    [2, 'Red/Yellow'],
    [2, 'Pink/Orange'],
    [2, 'Light Blue/Brown'],
    [2, 'Railroad/Utility'],
    [3, 'Wild Rent']
];
const propertyCards = [
    [2, 'Dark Blue', 'property'],
    [2, 'Brown'],
    [2, 'Utility'],
    [3, 'Green'],
    [3, 'Yellow'],
    [3, 'Red'],
    [3, 'Orange'],
    [3, 'Pink'],
    [3, 'Light Blue'],
    [4, 'Railroad'],
];
const propertyWildCards = [
    [1, 'Dark Blue/Green', 'propertyWild'],
    [1, 'Green/Railroad'],
    [1, 'Utility/Railroad'],
    [1, 'Light Blue/Railroad'],
    [1, 'Light Blue/Brown'],
    [2, 'Pink/Orange'],
    [2, 'Red/Yellow'],
    [2, 'Multi-Color']
];
//endregion


//region Let
let selectedCard = null;
let holdingPile = null;
let mode = 0;
//endregion


//region Function createCards
function createCards(cards) {
    let type;
    return cards.map((cardConfig) => {
        const tempCards = [];
        if (cardConfig[2]) {
            type = cardConfig[2];
        }
        for (let i = 0; i < cardConfig[0]; i++) {
            tempCards.push({text: cardConfig[1], type})
        }
        return tempCards;
    }).flat().map( function(item, index){
        const el = document.createElement('div');
        el.setAttribute('text', item.text);
        el.setAttribute('type', item.type);
        el.innerHTML = `
<p>
    ${item.type}
</p>
<p>
    ${item.text}
</p>
`;
        el.classList.add('card');
        document.body.appendChild(el);
        addListeners(el);
        el.setAttribute('deck', 'origin');
        return el;
    });
}
//endregion

function addListeners(el){
    el.addEventListener('click', function (e) {

    })
}




console.log('cards', createCards(moneyCards.concat(actionCards, rentCards, propertyCards, propertyWildCards)));
