const input = document.querySelector('#input');
const button = document.querySelector('#btn');
const p = document.querySelector('#message');
let inputVal = '';

button.addEventListener('click', clicked)
function clicked (){
    let inputVal = input.value;
    p.innerHTML = inputVal;
    input.value = '';
    button.innerHTML = 'submitted'
    }

input.addEventListener('click', changed)
function changed (){
    button.innerHTML = 'submit'
}

