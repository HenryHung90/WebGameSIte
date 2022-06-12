// background entities
class Ground extends Entity {
  constructor(spritesheet, posX, posY, width, height) {
    // pomle pixel
    let img = new Sprite(spritesheet, 236, 197, 60, 60);
    super(img, "ground", posX, posY, width, height);
  }
}

class Wooden extends Entity {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new Sprite(tileset, 194, 194, 200, 64);

    super(sprite, "wooden", xPos, yPos, width, height);
  }
}


class Key extends Entity {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new Sprite(tileset, 14, 26, 528, 1150);

    super(sprite, "key", xPos, yPos, width, height);
  }
}

class Star extends Entity {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new Sprite(tileset, 14, 16, 440, 395);

    super(sprite, "star", xPos, yPos, width, height);
  }
}



class Dialog2 extends Entity {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new Sprite(tileset, 64, 48, 1046, 706);

    super(sprite, "dialog2", xPos, yPos, width, height);
  }
}


class Elf extends Entity {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new Sprite(tileset, 20, 26, 478, 388);

    super(sprite, "elf", xPos, yPos, width, height);
  }
}


class Branch extends Entity {
  constructor(tileset, xPos, yPos, width, height, isfalse) {
    const sprite = new Sprite(tileset, 6, 8, 365, 285);
    super(sprite, "branch", xPos, yPos, width, height);
    this.isfalse = isfalse;
  }
}

class Flower extends Entity {
  constructor(tileset, xPos, yPos, width, height, isfalse) {
    const sprite = new Sprite(tileset, 2, 6, 454, 423);
    super(sprite, "flower", xPos, yPos, width, height);
    this.isfalse = isfalse;
  }
}
