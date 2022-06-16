class Ciclista {
  constructor() {
    this.x = canvas.width / 3;
    this.y = canvas.height - 100;
    this.speedX = 0;
    this.speedY = 30;
    this.width = 60;
    this.height = 90;
    this.img = new Image();
    this.img.src = "./img/rider.png";
  }

  drawCiclista() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  updatePosition() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > canvas.width - this.width || this.x < 0) {
      this.speedX = 0;
    }
    if (this.y < 0 || this.y > canvas.height - this.height) {
      this.speedY = 0;
    }
  }
  riderMovement = (e) => {
    if (e.key === "ArrowLeft" && this.x > 100) {
        this.x -= 20;
      }
      if (e.key === "ArrowRight" && this.x < 620) {
        this.x += 20;
      }
      if (e.key === "ArrowUp" && this.y > 0) {
        this.y -= 20;
      }
      if (e.key === "ArrowDown" && this.y < 600) {
        this.y += 20;
      }

      //console.log(player.score++);
      
  };
}
