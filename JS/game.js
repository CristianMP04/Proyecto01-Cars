class Game {
  constructor() {
    // all the properties of the game.
    this.background = new Image();
    this.background.src = "./img/road_02.jpg";
    this.ciclista = new Ciclista();
    this.vehiculosArr = [];
    this.intervalId;
    
    this.isGameOn = true;
    this.frame = 0;
  }

  

 
  
  spawningVehiculo() {
    
        const randomPositionX = Math.floor(Math.random() * (580 - 110) + 110); 
        this.vehiculosArr.push(new Vehiculo(randomPositionX));
        


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
