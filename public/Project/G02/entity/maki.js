class Maki extends Entity {
  constructor(spritesheet, posX, posY, width, height) {
    let img = new Sprite(spritesheet, 1982, 0, 466, 592);
    super(img, "maki", posX, posY, width, height);
    this.velX = 2;
    this.velY = 0;
    // states => standing state , walking state,jumping
    // frame
    let self = this;
    this.animFrame = {
      walkRight: {
        frames: [
          new Sprite(spritesheet, 2928, 0, 466, 592),
          new Sprite(spritesheet, 3410, 0, 466, 592),
        ],
        counter: 0,
      },
      walkLeft: {
        frames: [
          new Sprite(spritesheet, 1102, 0, 466, 592),
          new Sprite(spritesheet, 1532, 0, 466, 592),
        ],
        counter: 0,
      },
      standRight: new Sprite(spritesheet, 1982, 0, 466, 592),
      standLeft: new Sprite(spritesheet, 1982, 0, 466, 592),
      jumpRight: new Sprite(spritesheet, 2928, 0, 466, 592),
      jumpLeft: new Sprite(spritesheet, 1102, 0, 466, 592),
    };
    this.states = {
      walkingAnim(gameObj) {
        if (self.currentDirection == "left") {
          // number step for change frame
          if (gameObj.animFrame % 8 == 0) {
            self.sprite =
              self.animFrame.walkLeft.frames[self.animFrame.walkLeft.counter];
            self.animFrame.walkLeft.counter++;
            if (self.animFrame.walkLeft.counter > 1) {
              self.animFrame.walkLeft.counter = 0;
            }
          }
        } else {
          if (gameObj.animFrame % 8 == 0) {
            self.sprite =
              self.animFrame.walkRight.frames[self.animFrame.walkRight.counter];
            self.animFrame.walkRight.counter++;
            if (self.animFrame.walkRight.counter > 1) {
              self.animFrame.walkRight.counter = 0;
            }
          }
        }
      },
      standingAnim() {
        if (self.currentDirection == "left") {
          self.sprite = self.animFrame.standLeft;
        } else {
          self.sprite = self.animFrame.standRight;
        }
      },
      jumpingAnim() {
        if (self.currentDirection == "left") {
          self.sprite = self.animFrame.jumpLeft;
        } else {
          self.sprite = self.animFrame.jumpRight;
        }
      },
    };
    this.currentDirection = "right";
    this.currentState = this.states.standingAnim;
  }
}
