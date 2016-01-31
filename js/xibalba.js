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
}

function create() {
  bg = game.add.tileSprite(0, 0, 400, 800, 'background');
  bg.scale.setTo(.75)
}

function update() {

}

function render() {

}
