function scene2_mobsMove() {

    if (mobs1.x <= 1170) {
        isMobs1Left = false;
    }
    else if (mobs1.x >= 1470) {
        isMobs1Left = true;
    }
    if (isMobs1Left) {
        mobs1.setVelocityX(-100);
        mobs1.flipX = false;
    }
    else {
        mobs1.setVelocityX(100);
        mobs1.flipX = true;
    }

    if (mobs2.x <= 1750) {
        isMobs2Left = false;
    }
    else if (mobs2.x >= 2050) {
        isMobs2Left = true;
    }
    if (isMobs2Left) {
        mobs2.setVelocityX(-100);
        mobs2.flipX = false;
    }
    else {
        mobs2.setVelocityX(100);
        mobs2.flipX = true;
    }

    if (mobs3.x <= 3150) {
        isMobs3Left = false;
    }
    else if (mobs3.x >= 3450) {
        isMobs3Left = true;
    }
    if (isMobs3Left) {
        mobs3.setVelocityX(-100);
        mobs3.flipX = false;
    }
    else {
        mobs3.setVelocityX(100);
        mobs3.flipX = true;
    }
}
