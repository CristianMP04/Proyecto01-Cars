const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let riderImg = new Image();
riderImg.src = "./../img/rider.png";

let vehiculoImg = new Image();
vehiculoImg.src = "./../img/car_01.png";

const vehiculos = [];

const play = () => {
  for (let coches of vehiculos) {
    coches.borrar();
    coches.y -= 5;
    coches.dibujar();  
  }
};


const aparicionVehiculos = () => {
    const randomPositionX = Math.floor(Math.random() * 500);
    const coche = new Objeto(
      randomPositionX,
      570,
      120,
      60,
      vehiculoImg,
      ctx
    );
    vehiculos.push(coche);
  };


  // Carga Inicial Me Imprime el ciclista y vehiculo
const cargaInicial = () => {
  ctx.drawImage(riderImg, 310, 600, 70 ,100);
  ctx.drawImage(vehiculoImg, 310, 0, 70 ,155);
  setInterval(aparicionVehiculos, 200);
  setInterval(play, 200);
};

  
 







window.addEventListener("load", cargaInicial); // llama a la función cargaInicial (carga ciclista)

window.addEventListener("keydown", moveRider);