
let homebg, playBtn, skillBtn, bg2, title, carbg, bird1bg, bird2bg, mobs1bg, mobs2bg, mobs3bg, guide, next, last, quit;
function home_preload() {
    this.load.image('bg', './_img/bgDaylight.PNG');
    this.load.image('play', './_img/ButtonPlay.PNG');
    this.load.image('skill', './_img/ButtonGuide.PNG');
    this.load.audio('homeBGM', './audio/homeBGM.mp3');
    this.load.audio('adbtnclick', './audio/btn_click.mp3');
    this.load.audio('adbtnhover', './audio/btnhover.mp3');
    this.load.image('menubg', './_img/BGMenu.PNG');
    this.load.image('round1', './_img/round1.PNG');
    this.load.audio('round', './audio/round.mp3');
    this.load.image('title', './_img/title.PNG');
    this.load.spritesheet('carbg', './_img/car.PNG', { frameWidth: 280, frameHeight: 236 });
    this.load.spritesheet('birdbg', './_img/bird.PNG', { frameWidth: 135, frameHeight: 145 });
    this.load.spritesheet('mobs1bg', './_img/mobs1.PNG', { frameWidth: 141, frameHeight: 221 });
    this.load.spritesheet('mobs2bg', './_img/mobs2.PNG', { frameWidth: 166, frameHeight: 220 });
    this.load.spritesheet('mobs3bg', './_img/mobs3.PNG', { frameWidth: 133, frameHeight: 221 });
    this.load.spritesheet('guide', './_img/guide.PNG', { frameWidth: 1200, frameHeight: 856 });
    this.load.image('next', './_img/next.PNG');
    this.load.image('last', './_img/last.PNG');
    this.load.image('close', './_img/close.png');
}
