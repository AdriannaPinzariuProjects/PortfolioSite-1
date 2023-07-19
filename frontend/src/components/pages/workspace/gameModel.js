export default class GameModel {
  constructor() {
    this.player = { x: 0, y: 0 };
    this.enemies = [];
    this.projectiles = [];
    this.score = 0;
    this.gameOver = false;
  }

  movePlayer(x, y) {
    this.player.x += x;
    this.player.y += y;
  }

  spawnEnemy(x, y) {
    this.enemies.push({ x, y });
  }

  spawnProjectile(x, y) {
    this.projectiles.push({ x, y });
  }

  update() {
    // Update the game state here
    this.projectiles.forEach((projectile, projectileIndex) => {
      projectile.y -= 1;

      // Check for collisions with enemies
      this.enemies.forEach((enemy, enemyIndex) => {
        if (
          Math.abs(projectile.x - enemy.x) < 1 &&
          Math.abs(projectile.y - enemy.y) < 1
        ) {
          this.projectiles.splice(projectileIndex, 1);
          this.enemies.splice(enemyIndex, 1);
          this.score += 1;
        }
      });

      // Remove off-screen projectiles
      if (projectile.y < 0) {
        this.projectiles.splice(projectileIndex, 1);
      }
    });

    // Check for collisions with the player
    this.enemies.forEach((enemy, enemyIndex) => {
      if (
        Math.abs(this.player.x - enemy.x) < 1 &&
        Math.abs(this.player.y - enemy.y) < 1
      ) {
        this.gameOver = true;
      }
    });

    // Update enemy positions
    this.enemies.forEach(enemy => enemy.y += 1);
  }
}
