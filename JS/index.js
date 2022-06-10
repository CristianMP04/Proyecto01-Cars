const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let riderImg = new Image();
riderImg.src = "./../img/rider.png";





const cargaInicial = () => {
    ctx.drawImage(riderImg, 500, 500, 100 ,100);
  };







window.addEventListener("load", cargaInicial);