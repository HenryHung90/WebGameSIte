// SOLID
const render = {
  init(gameObj) {
    gameObj.tool.drawImage(
      backgroundImage,
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );
    let maki = gameObj.entities.maki;
    gameObj.levelBuilder.stock(gameObj);
    gameObj.tool.drawImage(
      maki.sprite.img,
      maki.sprite.srcX,
      maki.sprite.srcY,
      maki.sprite.srcW,
      maki.sprite.srcH,
      maki.posX,
      maki.posY,
      maki.width,
      maki.height
    );
  },
  update(gameObj) {
    this.updateFrame(gameObj);
    gameObj.tool.clearRect(0, 0, window.innerWidth, window.innerHeight);
    gameObj.tool.drawImage(
      backgroundImage,
      0,
      0,
      window.innerWidth / 3,
      window.innerHeight / 3
    );
    gameObj.levelBuilder.render(gameObj);
    let maki = gameObj.entities.maki;
    let camera = gameObj.camera;
    this.drawEntity(camera, maki, gameObj);
    gameObj.entities.molds.forEach((mold) => {
      this.drawEntity(camera, mold, gameObj);
    });
  },
  drawEntity(camera, entity, gameObj) {
    let entityEnd = entity.posX + entity.width;
    let frameWidth = camera.start + camera.width;
    if (entity.posX >= camera.start && entityEnd <= frameWidth) {
      gameObj.tool.drawImage(
        entity.sprite.img,
        entity.sprite.srcX,
        entity.sprite.srcY,
        entity.sprite.srcW,
        entity.sprite.srcH,
        entity.posX - camera.start,
        entity.posY,
        entity.width,
        entity.height
      );
    }
  },
  updateFrame(gameObj) {
    // distance
    let centerX = gameObj.entities.maki.posX + gameObj.entities.maki.width / 2;
    let dist = window.innerWidth / 8;

    if (centerX < gameObj.camera.start + 2 * dist) {
      gameObj.camera.start = Math.max(centerX - dist, 0);
    }
  },
};

class Game {
  // game basic setup creation
  init() {
    preload().then(() => {
      const canvas = document.querySelector(".board");
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
      const tool = canvas.getContext("2d");
      let entities = {};
      let camera = {
        start: 0,
        width: window.innerWidth,
      };
      let gameObj = {
        tool,
        canvas,
        entities,
        animFrame: 0,
        levelBuilder: new LevelBuilder(levelOne),
        camera,
        isWin: false
      };
      tool.scale(3.6, 3.6);
      let maki = new Maki(makiImage, 50, 0, 40, 40);
      gameObj.entities.maki = maki;
      // add monster
      gameObj.entities.molds = [];
      gameObj.entities.molds.push(
        new Mold(
          mold1Image,
          "mold1",
          470,
          176,
          24,
          24,
          levelOne.moveRangeOfMolds[0],
          0.5
        ),
        new Mold(
          mold2Image,
          "mold2",
          632,
          176,
          24,
          24,
          levelOne.moveRangeOfMolds[1],
          0.5
        ),
        new Mold(
          mold3Image,
          "mold3",
          770,
          50,
          24,
          24,
          levelOne.moveRangeOfMolds[2],
          0.2,
          true
        ),
        new Mold(
          mold3Image,
          "mold5",
          1210,
          176,
          24,
          24,
          levelOne.moveRangeOfMolds[4],
          1.4
        ),
        new Mold(
          mold2Image,
          "mold6",
          1280,
          176,
          24,
          24,
          levelOne.moveRangeOfMolds[5],
          0.2,
          true
        ),
        new Mold(
          mold1Image,
          "mold7",
          1600,
          176,
          32,
          32,
          levelOne.moveRangeOfMolds[6],
          1.7
        ),
        new Mold(
          mold3Image,
          "mold8",
          1700,
          176,
          32,
          32,
          levelOne.moveRangeOfMolds[7],
          1.9
        ),
      );


      gameObj.entities.scenery = [];
      render.init(gameObj);
      input.init();
      this.update(gameObj);
    });
  }
  update(gameObj) {
    // game execution
    function gameloop() {
      input.update(gameObj);
      animation.update(gameObj);
      physics.update(gameObj);
      movement.update(gameObj);
      render.update(gameObj);
      gameObj.animFrame++;
      requestAnimationFrame(gameloop);
    }
    gameloop();
  }
}
const game = new Game();
game.init();

