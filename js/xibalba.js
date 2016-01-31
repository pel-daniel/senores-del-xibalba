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
  game.load.image('leftForearm', 'assets/leftForearm.png');
  game.load.image('rightForearm', 'assets/rightForearm.png');
}

function create() {
  bg = game.add.tileSprite(0, 0, 400, 800, 'background');
  bg.scale.setTo(.75);

  player = game.add.group();
  player.scale.setTo(.75);

  playerBody = game.add.sprite(200, 777, 'playerBody');
  playerBody.anchor.setTo(0.5, 0.5);

  leftForearm = game.add.sprite(170, 763, 'leftForearm');
  leftForearm.anchor.setTo(0.5, 1.0);
  leftForearm.angle = -45;

  rightForearm = game.add.sprite(239, 755, 'rightForearm');
  rightForearm.anchor.setTo(0.5, 0);
  rightForearm.angle = 45;

  player.add(playerBody);
  player.add(leftForearm);
  player.add(rightForearm);
}

function update() {

}

function render() {

}
