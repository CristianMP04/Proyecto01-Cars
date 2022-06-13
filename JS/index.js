const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let riderImg = new Image();
riderImg.src = "./../img/rider.png";

let vehiculoImg = new Image();
vehiculoImg.src = "./../img/car_01.png";




// Carga Inicial Me Imprime el ciclista
const cargaInicial = () => {
    ctx.drawImage(riderImg, 310, 600, 70 ,100);
    ctx.drawImage(vehiculoImg, 310, 0, 70 ,100);
  };


  const logKey = (e) => {
    e.preventDefault();
    ciclista.borrar();
    ciclista.moverCiclista(e.key);
    ciclista.dibujar();
  };

  
 







window.addEventListener("load", cargaInicial); // llama a la función cargaInicial (carga ciclista)

window.addEventListener("keydown", moveRider);