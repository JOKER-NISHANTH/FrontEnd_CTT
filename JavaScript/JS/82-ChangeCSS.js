function search() {
    let myChange = document.querySelector('body');
    myChange.style.background = 'red';
}
function revert() {
    let myRevert = document.querySelector('body');
    myRevert.style.background = 'white';
}
function CH_HEAD() {
    let myHEAD = document.querySelector('h1');
    myHEAD.style.color = 'blue';
}

function CH_P() {
    let myP = document.querySelector('p');
    myP.style.color = 'pink';
}

function DIS() {
    let myD = document.querySelector('body');
    myD.style.display = 'none';
}

function ADDELA() {
    let CRTUL = document.querySelector('ul');
    let NEWLI = document.createElement('li');
    NEWLI.textContent='Created by JavaSCript';
    CRTUL.appendChild(NEWLI);
}







