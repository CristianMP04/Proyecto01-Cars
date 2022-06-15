
class Vehiculo {
   
    constructor(posXParam) {
        this.x = posXParam;
        this.y= 0;
        this.width = 90;
        this.height = 112;
        this.img = new Image();
        this.img.src = "./img/goat.png";
        this.vehiculoSpeed = 4;
    }

    drawVehiculo () {
       ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

  
    cowMove () {
          this.y = this.y + this.vehiculoSpeed
    };
 }

