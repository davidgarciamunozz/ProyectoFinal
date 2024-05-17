import { obtenerUsuarioActivo } from './utils.js';




const render = async () => {
  const boton = document.querySelector('.lista__boton');

  const usuarioActivo = obtenerUsuarioActivo();
  console.log(usuarioActivo);

  if (usuarioActivo) {
    boton.innerText = 'Cerrar Sesión';
    boton.classList.add('lista__boton--cerrar');
    boton.addEventListener('click', (event) => {
      localStorage.removeItem('user-active');
      window.location.href = 'DOM4.html';
    });
    return;
  }
 
}

document.addEventListener('DOMContentLoaded', render);

const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const slider = document.querySelector('#slider');
const sliderSection = document.querySelectorAll('.slider-section');

btnLeft.addEventListener('click', e => moveLeft());
btnRight.addEventListener('click', e => moveRight());

let operation = 0;
let counter = 0;
let withImg = 100/sliderSection.length;

function moveRight() {
  if(counter >= sliderSection.length - 1) {
    counter = 0;
    operation = 0;
    slider.style.transform = 'translate(-' + operation + '%)';
  } else {
    counter++;
  
  operation= operation + withImg;
  slider.style.transform = 'translate(-' + operation + '%)';
  slider.style.transition = 'transform 0.5s';
  }
}

function moveLeft() {
  counter--;
  if(counter < 0) {
    counter= sliderSection.length - 1;
    operation = withImg * (sliderSection.length - 1);
    slider.style.transform = 'translate(-' + operation + '%)';
  }else{
    operation= operation - withImg;
    slider.style.transform = 'translate(-' + operation + '%)';
    slider.style.transition = 'transform 0.5s';
  }
 
};

