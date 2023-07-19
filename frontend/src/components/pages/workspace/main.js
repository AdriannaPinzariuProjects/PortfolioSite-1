import GameModel from './gameModel.js';
import GameView from './gameView.js';
import GameController from './gameController.js';

const model = new GameModel();
const view = new GameView(model);
const controller = new GameController(model, view);

function gameLoop() {
  if (!model.gameOver) {
    model.update();
    view.render();
    requestAnimationFrame(gameLoop);
  } else {
    console.log("Game Over!");
  }
}

gameLoop();
