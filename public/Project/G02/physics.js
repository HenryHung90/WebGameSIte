let physics = {
  //handle logic
  update(gameObj) {
    this.gravity(gameObj.entities.maki);
    gameObj.entities.molds.forEach((mold) => {
      this.gravity(mold);
    });
    this.bgEntityCollision(gameObj);
    this.checkingDead(gameObj);
    this.gettingKey(gameObj);
    this.randomBranch(gameObj);
    this.fallingBranches(gameObj);
    // this.foward(gameObj);
  },
  gravity(entity) {
    entity.velY += 1.1;
    entity.posY += entity.velY;
  },
  bgEntityCollision(gameObj) {
    let maki = gameObj.entities.maki;
    let molds = gameObj.entities.molds;
    this.bgCollision(maki, gameObj);
    molds.forEach((mold) => {
      this.bgCollision(mold, gameObj);
    });
  },
  bgCollision(entity, gameObj) {
    let scenery = gameObj.entities.scenery;
    scenery.forEach((scene) => {
      if (this.checkRectCollision(scene, entity)) {
        this.handleDirec(entity);
        if (
          entity.posY < scene.posY &&
          entity.posX + entity.width > scene.posX &&
          scene.posX + scene.posY > entity.posX &&
          entity.velY >= 0
        ) {
          if (entity.type == "maki") {
            entity.currentState = entity.states.standingAnim;
          }
          if (
            entity.type == "maki" &&
            (scene.type.includes("mold") ||
              scene.type == "star" ||
              scene.type == "branch")
          ) {
          } else {
            entity.posY = scene.posY - entity.height - 1;
            entity.velY = 1.1;
          }
        }
        // check
      }
    });
  },
  checkRectCollision(scene, entity) {
    //x->r2>l1&&l2<r1
    let l1 = scene.posX;
    let l2 = entity.posX;
    let r1 = scene.posX + scene.width;
    let r2 = entity.posX + entity.width;
    let t1 = scene.posY + scene.height;
    let t2 = entity.posY + entity.height;
    let b1 = scene.posY;
    let b2 = entity.posY;
    // y-> t2>b1&&t1>b2
    if (r2 > l1 && l2 < r1 && t2 > b1 && t1 > b2) {
      return true;
    }
  },
  handleDirec(entity) {
    if (
      entity.type.includes("mold") &&
      (entity.posX < entity.rangeMove[0] || entity.posX > entity.rangeMove[1])
    ) {
      entity.currentDirection =
        entity.currentDirection == "left" ? "right" : "left";
      if (entity.isJump) {
        entity.velY = -6;
        entity.posY = 110;
      }
    }
  },
  checkCollision(entity) {
    if (entity.posY + entity.height >= 180 && entity.velY > 0) {
      entity.posY = 174;
      entity.velY = 0;
      entity.currentState = entity.states.standingAnim;
    }
  },
  checkingDead(gameObj) {
    let maki = gameObj.entities.maki;
    let molds = gameObj.entities.molds;
    let scenes = gameObj.entities.scenery;
    scenes.forEach((scene) => {
      if (
        scene.type == "flower" &&
        maki.posX + 40 >= scene.posX &&
        Math.abs(maki.posX - scene.posX) < 30 &&
        scene.posY + 20 >= maki.posY &&
        maki.posY >= scene.posY
      ) {
        document.querySelector(".hit-audio").play();
        location.reload();
      }
    });
    let branches = Array.from(gameObj.entities.scenery).filter(
      (sc) => sc.type == "branch"
    );
    branches.forEach((branch) => {
      // console.log(Math.abs(maki.posY - branch.posY));
      // // console.log(branch.posX, branch.posY, maki.posX, maki.posY);
      if (
        maki.posX + 25 >= branch.posX &&
        Math.abs(maki.posX - branch.posX) < 25 &&
        (Math.abs(maki.posY - branch.posY) < 20 ||
          (maki.posY < branch.posY && Math.abs(maki.posY - branch.posY) < 45))
      ) {
        document.querySelector(".hit-audio").play();
        location.reload();
      }
    });
    molds.forEach((mold) => {
      if (mold.type == "mold4") {
        if (
          maki.posX + 20 >= mold.posX &&
          Math.abs(maki.posX - mold.posX) < 20 &&
          mold.posY + 32 >= maki.posY &&
          maki.posY >= mold.posY
        ) {
          document.querySelector(".hit-audio").play();
          location.reload();
        }
      } else {
        if (
          maki.posX + 20 >= mold.posX &&
          Math.abs(maki.posX - mold.posX) < 17 &&
          maki.posY + 16 >= mold.posY &&
          mold.posY >= maki.posY
        ) {
          document.querySelector(".hit-audio").play();
          location.reload();
        }
      }
    });
  },
  gettingKey(gameObj) {
    let maki = gameObj.entities.maki;
    let scenes = gameObj.entities.scenery;
    scenes.forEach((scene) => {
      if (
        scene.type == "star" &&
        maki.posX + 30 >= scene.posX &&
        Math.abs(maki.posX - scene.posX) < 20
      ) {
        document.querySelector(".pyro").style.display = "block";
        document.querySelector(".dialog-3").style.display = "block";
        document.querySelector(".key-audio").play();
        // gameObj.isWin = true;
        //alert("You are get 1 of 3 keys, Congrat");
      }
    });
  },
  randomBranch(gameObj) {
    let scenery = Array.from(gameObj.entities.scenery).filter(
      (sc) => sc.type == "branch"
    );
    scenery.forEach((scene) => {
      if (scene.isfalse) scene.posY += 0.7;
    });
  },
  fallingBranches(gameObj) {
    let maki = gameObj.entities.maki;
    let scenery = Array.from(gameObj.entities.scenery).filter(
      (sc) => sc.type == "branch"
    );
    scenery.forEach((sc) => {
      if (maki.posX + window.innerWidth / 5 >= sc.posX) sc.isfalse = true;
    });
  },
  // foward(gameObj) {
  //   if (gameObj.isWin) gameObj.entities.maki.posX += 1.1;
  // },
};
