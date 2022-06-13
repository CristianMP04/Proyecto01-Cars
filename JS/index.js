const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let riderImg = new Image();
riderImg.src = "./../img/rider.png";

let vehiculoImg = new Image();
vehiculoImg.src = "./../img/car_01.png";

const vehiculos = [];

let ciclista = new Ciclista( 310, 600, 70 ,100, riderImg)






  // Carga Inicial Me Imprime el ciclista y vehiculo
const cargaInicial = () => {
  
  ctx.drawImage(vehiculoImg, 310, 0, 60 ,145);
  //setInterval(aparicionVehiculos, 200);
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

  
 







window.addEventListener("load", cargaInicial); // llama a la función cargaInicial (carga ciclista)

window.addEventListener("keydown", moveRider);