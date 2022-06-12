
class Mold extends Entity {
    constructor(spritesheet,type, posX, posY, width, height, rangeMove, velX, isJump = false) {
        let img = new Sprite(spritesheet, 56, 7, 315, 586);
        super(img, type, posX, posY, width, height);
        this.velX = velX;
        this.velY = 0;
        this.rangeMove = rangeMove;
        this.isJump = isJump;
        // states => standing state , walking state,jumping
        // frame
        let self = this;
        //   /frames
        this.animFrame = {
            walking: {
                frames: [
                    new Sprite(spritesheet, 56, 7, 315, 586),
                    new Sprite(spritesheet, 56, 7, 315, 586),
                ],
                counter: 0,
            },
            squashed: new Sprite(spritesheet, 56, 7, 315, 586)
        };
        // animation
        this.states = {
            walkingAnim: {
                animation(gameObj) {
                    if (gameObj.animFrame % 6 == 0) {
                        self.sprite = self.animFrame.walking.frames[self.animFrame.walking.counter];
                        self.animFrame.walking.counter++;
                        if (self.animFrame.walking.counter > 1) {
                            self.animFrame.walking.counter = 0;
                        }
                    }
                },
                movement() {
                    if (self.currentDirection == "left") {
                        self.posX -= self.velX;
                    } else {
                        self.posX += self.velX;

                    }
                }
            },
            squashed: new Sprite(spritesheet, 56, 7, 315, 586)

        }
        this.currentDirection = "left";
        this.currentState = this.states.walkingAnim;
    }


}