//parou 14m
const mario = document.querySelector('.mario');
const buttonUp = document.querySelector('.button-up');
const pipe = document.querySelector('.pipe');

const jump = () => {
  mario.classList.add('jump');
  
  setTimeout(() => {
    mario.classList.remove('jump');
  },500);
}

const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

  if (pipePosition <= 60 && pipePosition > 0 && marioPosition < 55) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './img/game-over.png';
    mario.style.width = '40px';
    mario.style.marginLeft = `20px`;

    clearInterval(loop);
  
  }

}, 10);

document.addEventListener('keydown', jump);
//buttonUp.addEventListener('click', jump);