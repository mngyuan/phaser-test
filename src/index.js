import 'phaser';

import {SimpleScene} from './scenes/simple-scene';

const gameConfig = {
  width: 128,
  height: 128,
  scene: SimpleScene,
  pixelArt: true,
  zoom: 4,
};

new Phaser.Game(gameConfig);
