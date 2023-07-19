export default class GameController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.moveSpeed = 10;
    this.projectileSpeed = 5;
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleKeyDown(event) {
    switch (event.key) {
      case 'ArrowUp':
        // Move the player up
        this.model.movePlayer(0, -this.moveSpeed);
        break;
      case 'ArrowDown':
        // Move the player down
        this.model.movePlayer(0, this.moveSpeed);
        break;
      case 'ArrowLeft':
        // Move the player to the left
        this.model.movePlayer(-this.moveSpeed, 0);
        break;
      case 'ArrowRight':
        // Move the player to the right
        this.model.movePlayer(this.moveSpeed, 0);
        break;
      case 'Space':
        // Shoot a projectile
        this.model.spawnProjectile(this.model.player.x, this.model.player.y - this.projectileSpeed);
        break;
      default:
        // Ignore any other keys
        break;
    }
  }
}
