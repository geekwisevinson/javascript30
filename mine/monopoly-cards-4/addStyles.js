function addStyles(cardList) {
    addRules();
    cardList.forEach( card => {
       card.classList.add('card');
       card.classList.add('picked-up');
    });
}

// you can create style sheets
function createCssSheet() {
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    return style.sheet;
}
let tries = 0;
// you can get style sheets
function getStyleSheet() {
    if (!document.styleSheets[0]) {
        console.log('no style sheet. will create one');
        return createCssSheet();
    } else {
        console.log('style sheet exists. will not create one');
        return document.styleSheets[0];
    }
}

function addRules() {
    const sheet = getStyleSheet();
    addRule(sheet,".card { border: 1px solid black; width: 100px; height: 150px; position: absolute;}");
    addRule(sheet,"[type=money] { background: green; }");
    addRule(sheet,"[type=action] { background: orange; }");
    addRule(sheet,"[type=rent] { background: purple; }");
    addRule(sheet,"[type=property] { background: blue; }");
    addRule(sheet,"[type=propertyWild] { background: red; }");
    //popup
    addRule(sheet,".popup { position: relative; display: inline-block; cursor: pointer; user-select: none;}");
    addRule(sheet,`.popup .popuptext {
  visibility: hidden;
  width: 100px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -50px;
  animation: fadeOut 1s;
}`);
    addRule(sheet,`.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}`);
    addRule(sheet,`.popup.show .popuptext{
  visibility: visible;
   animation: fadeIn 1s;
   display: flex;
   flex-direction: column;
}`);
    addRule(sheet,`.popup.hide .popuptext{
  visibility: visible;
   animation: fadeOut 1s;
   display: flex;
   flex-direction: column;
   animation-timing-function:linear;
  animation-fill-mode:forwards;
  animation-iteration-count: 1;
}`);

    addRule(sheet,`.popup .popuptext button{
        width: 100%;
}`);

    addRule(sheet,`@keyframes fadeOut {
  from {opacity: 1;} 
  to {opacity: 0;}
}`);
    addRule(sheet,`@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}`);
}

function addRule(sheet, rule) {
    tries++;
    console.log('add rule', rule, tries)
    sheet.insertRule(rule);
}
