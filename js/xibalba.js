var game = new Phaser.Game(
  300,
  600,
  Phaser.CANVAS,
  'gameDiv',
  {
    preload: preload,
    create: create,
    update: update,
    render: render
  }
);

function preload() {
  game.load.image('background', 'assets/background.png');
  game.load.image('playerBody', 'assets/playerBody.png');
}

function create() {
  bg = game.add.tileSprite(0, 0, 400, 800, 'background');
  bg.scale.setTo(.75)

  playerBody = game.add.sprite(game.world.centerX, 575, 'playerBody')
  playerBody.anchor.setTo(0.5, 0.5);
}

function update() {

}

function render() {

}
