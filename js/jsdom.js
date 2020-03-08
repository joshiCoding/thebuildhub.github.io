//learning document object model
console.log(document.querySelector('header'));
console.log(document.querySelectorAll('.items'));



const btn = document.querySelector('.btn');
btn.addEventListener('click',btnClick);

function btnClick(e){
  e.preventDefault();
  document.querySelector('section').style.background = 'red';
}

btn.addEventListener('focusout',btnFocus);

function btnFocus(e){
  e.preventDefault();
  document.querySelector('section').style.background = '#fff';
}

const menubtn = document.querySelector('.menu-bar');

menubtn.addEventListener('click',menushow);

function menushow(e){
  document.querySelector('.menu').classList.add('menu-show');
  document.querySelector('.menu-show').classList.remove('menu');
}

menubtn.addEventListener('focusout',menuclose);

function menuclose(e){
  document.querySelector('.menu-show').classList.add('menu');
  document.querySelector('.menu').classList.remove('menu-show');
}
