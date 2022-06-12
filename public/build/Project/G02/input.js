// left,right space
// keydown
let input = {
  down: {},
  pressed: {},
  init() {
    // event listener set
    window.addEventListener("keydown", (e) => {
      this.down[e.code] = true;
      // console.log(e.code)
    });
    window.addEventListener("keyup", (e) => {
      delete this.down[e.code];
      delete this.pressed[e.code];
    });
  },
  update(gameObj) {
    let maki = gameObj.entities.maki;
    //left
    if (this.isDown("ArrowLeft")) {
      // go left
      maki.posX -= maki.velX;
      maki.currentDirection = "left";
      maki.currentState = maki.states.walkingAnim;
      this.run();
    }
    // right
    if (this.isDown("ArrowRight")) {
      // go right
      maki.posX += maki.velX;
        maki.currentDirection = "right";
        maki.currentState = maki.states.walkingAnim;
        this.run();
    }
    // space
    // console.log(maki.velY);
    if (this.isPressed("ArrowUp")) {
      if (maki.velY == 1.1) {
        maki.velY -= 14;
        maki.currentState = maki.states.jumpingAnim;
        this.jump();
      }
    }
  },
  isDown(key) {
    return this.down[key];
  },
  isPressed(key) {
    if (this.pressed[key]) {
      return false;
    } else if (this.down[key]) {
      return true;
    }
  },
  run() {
    document.querySelector(".run-audio").play();
  },
  jump() {
    document.querySelector(".jump-audio").play();
  },
};
