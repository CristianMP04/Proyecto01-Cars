class ciclista {
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

      moverCiclista(key) {
        if (key === "ArrowLeft") {
          if (this.x > 0) {
            this.x = this.x - 10;
          }
        }
        if (key === "ArrowRight") {
          if (this.x < 700) {
            this.x = this.x + 10;
          }
        }

        if (key === "ArrowUp") {
            if (this.y < 700) {
              this.y = this.y + 10;
            }
          }
          
          if (key === "ArrowDown") {
            if (this.y > 0) {
              this.y = this.y + 10;
            }
          }

}}

