class Ciclista {
    constructor(x, y, ancho, alto, imagen)     {
        this.x =x;
        this.y= y;
        this.ancho = ancho;
        this.alto = alto;
        this.imagen =imagen;

    }

    dibujar() {
        ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
    }

    borrar() {
        ctx.clearRect(this.x, this.y, this.ancho, this.alto);
      }

     }

