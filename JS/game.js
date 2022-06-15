class Game {
  constructor() {
    // all the properties of the game.
    this.background = new Image();
    this.background.src = "../img/road_02.jpg";
    this.ciclista = new Ciclista();
    this.vehiculosArr = [];
    this.intervalId;
    //this.vehiculoSeparation = 100;
    //this.shot = undefined;
    this.isGameOn = true;
    this.frame = 0;
  }

  

 
  // drawBackground = () => {
  //     ctx.drawImage(this.background,0,0, canvas.width, canvas.height)
  //  }
  //this.score = 0;
  //  this.shotSound = new Audio("./sounds/laser-shot.mp3");
  //  this.shotSound.volume = 0.1;
  //  this.explosionSound = new Audio("./sounds/explosion.mp3");
  //  this.explosionSound.volume = 0.1;
  //  this.shipExplosionSound = new Audio("./sounds/ship-explosion.mp3");
  //  this.shipExplosionSound.volume = 0.3;
  //  this.soundTrack = new Audio("./sounds/space-soundtrack.mp3");
  //  this.soundTrack.volume = 0.2;

  // astDisappearPoints = (eachAsteroidParam) => {
  //  if (eachAsteroidParam.y === canvas.height) {
  //   this.score += 50;
  //   scoreDom.innerText = this.score;
  //   this.asteroidArr.shift();
  //  }
  // };
  // shootingLaser = () => {
  //  this.shot = new Shot(
  //   this.spaceship.x + this.spaceship.width / 3,
  //   this.spaceship.y
  //  );
  //  this.shotSound.play();
  // };
  // checkShotAstCollision = (eachAsteroidParam) => {
  //  if (
  //   this.shot !== undefined &&
  //   this.shot.x < eachAsteroidParam.x + eachAsteroidParam.width &&
  //   this.shot.x + this.shot.width > eachAsteroidParam.x &&
  //   this.shot.y < eachAsteroidParam.y + eachAsteroidParam.height &&
  //   this.shot.height + this.shot.y > eachAsteroidParam.y
  //  ) {
  //   this.shot = undefined;
  //   const astIndex = this.asteroidArr.indexOf(eachAsteroidParam);
  //   this.asteroidArr.splice(astIndex, 1);
  //   this.explosionSound.play();
  //   this.score = this.score + 100;
  //   scoreDom.innerText = this.score;
  //  }
  // };
  spawningVehiculo() {
    //       let lastVehiculos = this.vehiculosArr[this.vehiculosArr.length - 1];
    // this.intervalId = setInterval(() => {
        const randomPositionX = Math.floor(Math.random() * (580 - 110) + 110); 
        this.vehiculosArr.push(new Vehiculo(randomPositionX));
        // clearInterval(this.intervalId);
        // if (vehiculosArr > 10) {
        //     vehiculosArr.splice(1,0);
            
        // }

    // }, 10000);

// spawningVehiculo() {
//     let lastVehiculos = this.vehiculosArr[this.vehiculosArr.length - 1];
//     if (lastVehiculos.y > 0 + this.vehiculoSeparation) {
//     let randomX = Math.floor(Math.random() * (580 - 110) + 110)
//     let nuevoVehiculo = new Vehiculo(randomX);
        
//         this.vehiculosArr.push(new Vehiculo(nuevoVehiculo));
//         clearInterval(this.intervalId);
        // if (vehiculosArr > 10) {
        //     vehiculosArr.splice();
            
        // }



    //       console.log(lastVehiculos);
    //   if (lastVehiculos.y > 0 + this.vehiculoSeparation) {
    //   let randomX = Math.random() * (canvas.width);
    //   let nuevoVehiculo = new Vehiculo(randomX);
    //   if (this.score >= 1000) {
    //     nuevoVehiculo.vehiculoSpeed = 3;
    //   }
    //   if (this.score >= 2000) {
    //     nuevoVehiculo.vehiculoSpeed = 4;
    //   }
    //   if (this.score >= 3000) {
    //     nuevoVehiculo.vehiculoSpeed = 5;
    //   }
    
    // };
  };
  checkVehiculoCollision = (eachVehiculoParam) => {
   if (
    this.ciclista.x < eachVehiculoParam.x + eachVehiculoParam.width &&
    this.ciclista.x + this.ciclista.width > eachVehiculoParam.x &&
    this.ciclista.y < eachVehiculoParam.y + eachVehiculoParam.height &&
    this.ciclista.height + this.ciclista.y > eachVehiculoParam.y
   ) {
    this.isGameOn = false;
  //   this.shipExplosionSound.play();
  //   this.soundTrack.pause();
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
   }
  };

  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  };
  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  // all the methods of the game.
  gameLoop = () => {
    // 1. clear canvas
    this.clearCanvas();
    
    
    // 2. move the elements or other actions
    // setInterval(this.spawningVehiculo(), 2000);
    this.frame++;
    //console.log(this.frame);

    this.ciclista.updatePosition();
    // this.vehiculo.cowMove();
    
    this.vehiculosArr.forEach((eachVehiculo) => {
      eachVehiculo.cowMove();
      this.checkVehiculoCollision(eachVehiculo);
    });

    // 3. draw the elements
    this.drawBackground();
    this.ciclista.drawCiclista();
    this.vehiculosArr.forEach((vehiculo) => {
        //console.log(vehiculo);
      vehiculo.drawVehiculo();
      
    });

    // 4. recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }

    if (this.frame % 50 === 0) {
        this.spawningVehiculo();
    }

  };
}
