const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let isGameOn = true;

let riderImg = new Image();
riderImg.src = "./../img/rider.png";

let vehiculoImg = new Image();
vehiculoImg.src = "./../img/goat.png";

let vehiculos = [];

let ciclista = new Ciclista( 310, 600, 70 ,100, riderImg);

let frames = 0;


const jugar = () => {
  for (let vehiculo of vehiculos) {
    vehiculo.borrar();
    vehiculo.y += 10;
    vehiculo.dibujar();
   
  }
  frames++;
  if ( frames % 10 ===0) {
    aparicionVehiculos();
  } 
};

const aparicionVehiculos = () => {
  const randomPositionX = Math.trunc(Math.random() * (580 - 110 ) + 110);
  const vehiculo = new Vehiculo(
    randomPositionX,
    -140,
    100,
    122,
    vehiculoImg,
    ctx
  );
  vehiculos.push(vehiculo);
};

// colision
checkShipAstCollision = (vehiculo) => {
  if (
    this.ciclista.x < vehiculo.x + vehiculo.width &&
    this.ciclista.x + this.ciclista.width > vehiculo.x &&
    this.ciclista.y < vehiculo.y + vehiculo.height &&
    this.ciclista.height + this.ciclista.y > vehiculo.y
  ) {
    isGameOn = false;

    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
  }
};


// final colision





const cargaInicial = () => {
  ciclista.dibujar();
  setInterval(jugar, 200);
  
  // setInterval(aparicionVehiculos, 1000);
};


// movimiento + limite 
const moveRider = (e) => {
  ciclista.borrar()
  if (e.key === "ArrowLeft" && ciclista.x > 100) {
    ciclista.x -= 20;
  }
  if (e.key === "ArrowRight" && ciclista.x < 530) {
    ciclista.x += 20;
  }
  if (e.key === "ArrowUp" && ciclista.y > 0) {
    ciclista.y -= 20;
  }
  if (e.key === "ArrowDown" && ciclista.y < 600) {
    ciclista.y += 20;
  }
  ciclista.dibujar();

};

  
 

window.onload = () => {
  const startButton = document.getElementById("empezar");
  const divCanvas = document.getElementById("divCanvas");
  startButton.addEventListener("click", function() {
    divCanvas.classList.remove("hidden");
    startButton.classList.add("hidden");
    cargaInicial();
  });

}





// window.addEventListener("load", cargaInicial); // llama a la función carga Inicial (carga ciclista)

window.addEventListener("keydown", moveRider);