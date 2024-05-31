//Mario
const mario = document.querySelector('.mario.walking');
const marioLose = document.querySelector('.mario.lose');

//Buttons
const buttonUp = document.querySelector('.button-up');

//Enemies
const enemy = document.querySelector('.pipe');
let countEnemies = 0;

//Background
let game = document.querySelector('.game');
let presentation = document.querySelector('.presentation');
let clouds1 = document.querySelector('.clouds-1');
let clouds2 = document.querySelector('.clouds-2');

/*============================================================================================================*/

//Game Start
const gameStart = setInterval(() => {

  const enemyPosition = enemy.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

  gameRules(enemyPosition, marioPosition);

}, 10);

//Game Rules
const gameRules = ((enemyPosition, marioPosition) => {

  //If enemy hit Mario
  let marioWasHit = enemyPosition <= 60 && enemyPosition > 0 && marioPosition < 55;
  marioHit(marioWasHit, enemyPosition, marioPosition);

});

//Change enemies
const changeEnemy = ((enemyName) => {

});

/*============================================================================================================*/

//Actions
const jump = () => {

  mario.classList.add('jump');
  
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);

}

//Mario hit
const marioHit = (marioWasHit, enemyPosition, marioPosition) => {

  if (marioWasHit) {

    console.log('marioWsHit ', marioWasHit);
    enemy.style.animation = 'none';
    enemy.style.left = `${enemyPosition}px`;

    mario.classList.add('display-none');

    marioLose.classList.remove('display-none');
    marioLose.style.bottom = `${marioPosition}px`;

    //stop game
    clearInterval(gameStart);

  }

}

/*============================================================================================================*/

//Commands
//document.addEventListener('keydown', jump);
document.addEventListener('keydown', (event)=>{

  if (event.key == 'ArrowUp') {

    jump();   
  
  } else if(event.key == 'Enter'){

    game.classList.remove('display-none');
    presentation.classList.add('display-none');

  }

});

//buttonUp.addEventListener('keydown', jump);

// const cloudsMove = (clouds1Position, clouds2Position) => {

//   console.log('c1 ', `${clouds1Position}`);
//   console.log('c2 ', `${clouds2Position}`);
//   clouds1.style.animation = 'clouds-animation-1 45s infinite linear';
//   clouds2.style.animation = 'clouds-animation-2 60s infinite linear';
//   clouds1.style.left = `${clouds1Position}`;
//   clouds2.style.left = `${clouds2Position}`;

// }