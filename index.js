let infoHeader = document.querySelector('.info-header');
let infoTabContent = document.querySelectorAll('.info-tabcontent');
let tab = document.querySelectorAll('.info-header-tab');


function hideTabContent(a, b) {
    for (let i = a; i < b.length; i++) {
        b[i].classList.remove('show')
        b[i].classList.add('hide')
    }
}

hideTabContent(1, infoTabContent )

function showTabContent(z, y) {
    if (y[z].classList.contains('hide')) {
        y[z].classList.remove('hide')
        y[z].classList.add('show')
    }
}


infoHeader.addEventListener('click', (evt) => {
    let target = evt.target;
    for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
            hideTabContent(0, infoTabContent )
            showTabContent(i, infoTabContent )
            break;
        }
    }
})