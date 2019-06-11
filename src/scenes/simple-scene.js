export class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('ocean', 'assets/ocean.png');
    this.load.spritesheet('ships', 'assets/ships.png', {
      frameWidth: 12,
      frameHeight: 12,
    });
  }
  create() {
    this.add.image(0, 32, 'ocean');
    this.add.text(0, 0, 'Hello Phaser!', {fill: '#0f0'});
    this.player = this.add.sprite(6, 32, 'ships');
    player.setFrame(4);
  }
  update() {}
}
