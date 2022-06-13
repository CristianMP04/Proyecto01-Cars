class vehiculo {
    constructor(x, y, ancho, alto, imagen, ctx) {
        this.x =x;
        this.y= y;
        this.ancho = ancho;
        this.alto = alto;
        this.imagen =imagen;
        this.ctx = ctx;
    }

    dibujar(ctx) {
        ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
    }

    borrar(ctx) {
        ctx.clearRect(this.x, this.y, this.ancho, this.alto);
      }

    }

