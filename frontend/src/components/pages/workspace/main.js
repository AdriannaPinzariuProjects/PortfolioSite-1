import GameModel from './gameModel.js';
import GameView from './gameView.js';
import GameController from './gameController.js';

const model = new GameModel();
const view = new GameView();
const controller = new GameController(model, view);

function gameLoop() {
  model.update();
  view.render();
  requestAnimationFrame(gameLoop);
}

gameLoop();
