class ciclista {
    constructor(x, y, ancho, alto, imagen, ctx) {
        this.x;
        this.y;
        this.ancho;
        this.alto;
        this.imagen;
        this.ctx;
    }

    dibujar() {
        ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
    }

}