const input = document.querySelector('#input');
const button = document.querySelector('#btn');
const p = document.querySelector('#message');

button.addEventListener('click', clicked)
function clicked (){
    let inputVal = input.value;
    p.innerHTML = inputVal;
    p.style.visibility = 'visible'
}