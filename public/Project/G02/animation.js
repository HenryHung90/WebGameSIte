let animation = {
  update(gameObj) {
    let maki = gameObj.entities.maki;
    maki.currentState(gameObj);

    gameObj.entities.molds.forEach((mold) => {
      mold.currentState.animation(gameObj);
    });
  },
};
