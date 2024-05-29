//Mario
const mario = document.querySelector('.mario.walking');
const marioLose = document.querySelector('.mario.lose');

//Buttons
const buttonUp = document.querySelector('.button-up');

//Enemies
const enemy = document.querySelector('.pipe');
let countEnemies = 0;

//Background
const clouds1 = document.querySelector('.clouds-1');
const clouds2 = document.querySelector('.clouds-2');

//Game Start
const gameStart = setInterval(() => {

  const enemyPosition = enemy.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

  gameRules(enemyPosition, marioPosition);

}, 10);

//Game Rules
const gameRules = ((enemyPosition, marioPosition) => {

  //If Mario hit a enemy
  if (enemyPosition <= 60 && enemyPosition > 0 && marioPosition < 55) {
    console.log('hit');
    enemy.style.animation = 'none';
    enemy.style.left = `${enemyPosition}px`;
  
    mario.classList.add('display-none');
  
    marioLose.classList.remove('display-none');
    marioLose.style.bottom = `${marioPosition}px`;

    clearInterval(gameStart);
    
  } 

});

//Actions
const jump = () => {

  mario.classList.add('jump');
  
  setTimeout(() => {
    mario.classList.remove('jump');
  },500);

}


//Commands
document.addEventListener('keydown', jump);
//buttonUp.addEventListener('click', jump);