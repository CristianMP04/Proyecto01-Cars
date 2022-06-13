const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let riderImg = new Image();
riderImg.src = "./../img/rider.png";

let vehiculoImg = new Image();
vehiculoImg.src = "./../img/car_01.png";

let vehiculos = [];

let ciclista = new Ciclista( 310, 600, 70 ,100, riderImg);

const jugar = () => {
  for (let vehiculo of vehiculos) {
    vehiculo.borrar();
    vehiculo.y += 5;
    vehiculo.dibujar();
   
  }
};

const aparicionVehiculos = () => {
  const randomPositionX = Math.floor(Math.random() * 600);
  const vehiculo = new Vehiculo(
    randomPositionX,
    0,
    60,
    140,
    vehiculoImg,
    ctx
  );
  vehiculos.push(vehiculo);
};






  
const cargaInicial = () => {
  ciclista.dibujar();
  setInterval(jugar, 200);
  setInterval(aparicionVehiculos, 2500);
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

  
 







window.addEventListener("load", cargaInicial); // llama a la función carga Inicial (carga ciclista)

window.addEventListener("keydown", moveRider);