let pauseText, homeBtn, restartBtn, continueBtn, menuBG, pauseBG;

function pause_preload() {
    this.load.image('menubg', './_img/BGMenu.PNG');
    this.load.image('pausebg', './_img/BGPaused.PNG');
    this.load.image('continue', './_img/buttoncontinue.PNG');
    this.load.image('home', './_img/buttonhome.PNG');
    this.load.image('restart', './_img/buttonrestart.PNG');
}
function pause_create() {
    menuBG = this.add.image(0, 0, 'menubg').setOrigin(0, 0).setScale(0.5);
    pauseBG = this.add.image(0, 0, 'pausebg').setOrigin(0, 0).setScale(0.5);
    continueBtn = this.add.image(pause_config.width / 2, 350, 'continue').setScale(0.5);
    homeBtn = this.add.image(pause_config.width / 2 - 150, 350, 'home').setScale(0.5);
    restartBtn = this.add.image(pause_config.width / 2 + 150, 350, 'restart').setScale(0.5);
}