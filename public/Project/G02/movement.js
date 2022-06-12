const movement = {
    update(gameObj) {
        gameObj.entities.molds.forEach((mold) => {
            mold.currentState.movement(gameObj);
        })
    }
}