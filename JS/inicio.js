// * GLOBAL VARIABLES
let gameIntro = document.querySelector("#game-intro");
let gameOverScreen = document.querySelector("#gameover-screen");
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");
let newGame;
// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
    
   
    
//let scoreBoard = document.querySelector("#scoreboard");

  // removing splash-screen and appearing canvas.
  gameIntro.style.display = "none"
  gameOverScreen.style.display = "none";
  canvas.style.display = "flex";
  //scoreBoard.style.display = "flex";
  // starting game
  newGame = new Game();
//   newGame.soundTrack.play();
//   newGame.soundTrack.loop = true;
//   newGame.soundTrack.playbackRate = 2;
//   scoreDom.innerText = 0;
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