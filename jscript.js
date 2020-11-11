let toggle = true;

const btn = document.querySelector('#frame');
const cuadro = document.querySelector('.line');

btn.addEventListener('click', rotar);

cuadro.addEventListener('animationend', (e) => {
  cuadro.classList.remove('open');
});

function rotar() {
  if (toggle) {
    cuadro.classList.add('open');
    toggle = false;
  } else {
    cuadro.classList.remove('open');
    toggle = true;
  }
}
