const plus = document.getElementById('plus');
const sub = document.getElementById('sub');
const num = document.querySelector('input');
const displayNumber = document.querySelector('h1');

let counter = 0;

displayNumber.innerText = counter;



plus.addEventListener('click', add);
sub.addEventListener('click', subtract);
function add () {
    counter += Number(num.value);
    displayNumber.innerHTML = counter;
    if(counter > -1){
        displayNumber.classList.remove('red')
    }
};

function subtract () {
    counter -= Number(num.value);  
    displayNumber.innerHTML = counter; 
    if(counter < 0){
        displayNumber.classList.add('red')
    }
};