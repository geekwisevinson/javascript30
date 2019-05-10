function addPopUp(target) {
    const popUp = document.createElement('div');
    popUp.innerHTML =`Click me to toggle the popup!
  <span class="popuptext" id="myPopup">
  <div><button>Pick up 1</button></div>
    <div><button>Pick up all</button></div>
</span>`;
    popUp.classList.add('popup');
    target.appendChild(popUp);
    target.addEventListener('mouseover', function () {
        popUp.classList.add('show');
        popUp.classList.remove('hide');
    });
    target.addEventListener('mouseout', function () {
        popUp.classList.remove('show');
        popUp.classList.add('hide');
    })
}
