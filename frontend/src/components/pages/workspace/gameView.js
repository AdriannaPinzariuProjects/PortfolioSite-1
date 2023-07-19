export default class GameView {
  constructor(gameModel) {
    this.canvas = document.getElementById('gameCanvas');
    this.context = this.canvas.getContext('2d');
    this.gameModel = gameModel;
  }

  drawRectangle(x, y, width, height, color) {
    this.context.fillStyle = color;
    this.context.fillRect(x, y, width, height);
  }

  render() {
    // Clear the canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Render the player
    this.drawRectangle(
      this.gameModel.player.x,
      this.gameModel.player.y,
      20, // Width of the player
      20, // Height of the player
      'blue' // Color of the player
    );

    // Render the enemies
    this.gameModel.enemies.forEach((enemy) => {
      this.drawRectangle(
        enemy.x,
        enemy.y,
        20, // Width of the enemy
        20, // Height of the enemy
        'red' // Color of the enemy
      );
    });

    // Render the projectiles
    this.gameModel.projectiles.forEach((projectile) => {
      this.drawRectangle(
        projectile.x,
        projectile.y,
        5, // Width of the projectile
        10, // Height of the projectile
        'green' // Color of the projectile
      );
    });

    // Render the score
    this.context.fillStyle = 'black';
    this.context.font = '20px Arial';
    this.context.fillText(`Score: ${this.gameModel.score}`, 10, 30);
  }
}
