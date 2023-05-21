const body = document.querySelector('body');
const colorText = document.querySelector('p');

function changeColor() {
    if(body.style.backgroundColor == 'red'){
        body.style.backgroundColor = 'darkblue';
        colorText.textContent = 'Dark Blue';
    }else {
        body.style.backgroundColor = 'red'
        colorText.textContent = 'Red';
    }
}
 
const button = document.querySelector('.button');
button.addEventListener('click', changeColor);