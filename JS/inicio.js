// * GLOBAL VARIABLES
let gameIntro = document.querySelector("#game-intro");
let gameOverScreen = document.querySelector("#gameover-screen");
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");
let newGame;

const startGame = () => {
    
   
    

  gameIntro.style.display = "none"
  gameOverScreen.style.display = "none";
  canvas.style.display = "flex";
  
  newGame = new Game();

  newGame.gameLoop();
};
// * ADD EVENT LISTENERS
let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startGame);

document.addEventListener("keydown", (event) => {
    newGame.ciclista.riderMovement(event);
  
});
// let playAgainButton = document.querySelector("#restart-btn");
// playAgainButton.addEventListener("click", startGame);