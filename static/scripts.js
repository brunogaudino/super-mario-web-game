//Mario
const mario = document.querySelector('.mario.walking');
const marioLose = document.querySelector('.mario.lose');

//Buttons
const buttonUp = document.querySelector('.button-up');

//Enemies
const enemy = document.querySelector('.pipe');

//Background
let game = document.querySelector('.game');
let presentation = document.querySelector('.presentation');
let clouds1 = document.querySelector('.clouds-1');
let clouds2 = document.querySelector('.clouds-2');
let gameOver = document.querySelector('.game-over');

/*============================================================================================================*/

//Game Start
const start = () => {

  console.log('start');
  presentation.classList.add('display-none');
  game.classList.remove('display-none');
  gameStart();

};

const gameStart = (() => {

  setInterval(() => {

    gameRules();

  }, 10)

});

const gameRules = (() => {

  const enemyPosition = enemy.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
  //If enemy hit Mario
  let marioWasHit = enemyPosition <= 60 && enemyPosition > 0 && marioPosition < 55;
  
  console.log('game rules');
  if (marioWasHit) {
  
    console.log('in marioWsHit ', marioWasHit);
    enemy.style.animation = 'none';
    enemy.style.left = `${enemyPosition}px`;

    mario.classList.add('display-none');

    marioLose.classList.remove('display-none');
    marioLose.style.bottom = `${marioPosition}px`;

    //game over
    endGame();

  }

});

//Game over
const endGame = () => {

  setTimeout(() => {
    console.log('endGame');
    
    presentation.classList.add('display-none');
    game.classList.add('display-none');
    gameOver.classList.remove('display-none');

  }, 1500);


};

const restart = () => {

  console.log('restart');
  window.location.reload();

}


/*============================================================================================================*/

//Actions
const jump = () => {
  console.log('jump');
  mario.classList.add('jump');
  
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);

}

/*============================================================================================================*/

//Commands
document.addEventListener('keydown', (event)=>{

  if (event.key == 'ArrowUp') {

    jump();   
  
  }
});
