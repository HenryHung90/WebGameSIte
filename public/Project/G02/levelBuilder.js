class LevelBuilder {
  // create entities like monster and wood, ground...
  constructor(level) {
    this.sceneryEntities = [];

    level.ground.forEach((gCord) => {
      this.sceneryEntities.push(
        new Ground(woodImage, gCord[0], gCord[1], gCord[2], gCord[3])
      );
    });

    level.woodens.forEach((wooden) => {
      this.sceneryEntities.push(
        new Wooden(woodImage, wooden[0], wooden[1], wooden[2], wooden[3])
      );
    });

    // single entites
    this.sceneryEntities.push(new Dialog2(dialog2Image, 200, 50, 64, 64));
    this.sceneryEntities.push(new Elf(elfImage, 270, 50, 48, 48));
    //this.sceneryEntities.push(new Key(keyImage, 2000, 170, 16, 16));
    this.sceneryEntities.push(new Star(starImage, 2000, 170, 24, 24));

    this.sceneryEntities.push(new Flower(flowerImage, 920, 145, 48, 48));

    //from, to, distance
    let range = spacedRandArray(300, 1800, 200);
    range.forEach((cor) => {
      this.sceneryEntities.push(new Branch(branchImage, cor, 0, 24, 24, false));
    });
  }
  stock(gameObj) {
    //
    this.sceneryEntities.forEach((entity) => {
      gameObj.entities.scenery.push(entity);
    });
  }
  render(gameObj) {
    let camera = gameObj.camera;

    gameObj.entities.scenery.forEach((entity) => {
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
    });
  }
}

function rand(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function spacedRandArray(from, to, dis) {
  var retArray = [];
  var temp =  rand(from, from + 50);;
  while(temp < to){
    temp += dis;
    retArray.push(temp);
  }

  return retArray;
}
