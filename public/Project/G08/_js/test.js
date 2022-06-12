sceneBGM = this.sound.add('sceneBGM', { volume: 0.1, loop: true });
adbtnclick = this.sound.add('adbtnclick', { volume: 0.1, loop: false });
adbtnhover = this.sound.add('adbtnhover', { volume: 0.1, loop: false });
jump = this.sound.add('jump', { volume: 0.1, loop: false });
mobsbehit = this.sound.add('mobsbehit', { volume: 1, loop: false });
pick = this.sound.add('pick', { volume: 1, loop: false });
playermask = this.sound.add('playermask', { volume: 1, loop: false });

round1 = this.add.image(config.width/2, config.height/2, 'round1').setScale(0.5);
round2 = this.add.image(config.width/2, config.height/2, 'round2').setScale(0.5);
boss1 = this.add.image(config.width/2, config.height/2, 'boss1').setScale(0.5);
boss2 = this.add.image(config.width/2, config.height/2, 'boss2').setScale(0.5);

round2 = this.add.image(config.width/2, config.height/2, 'round2').setScale(0.5);
round2.setVisible(false);
round1.scene.tweens.add({
    targets: round1,
    scaleX: 0.5,
    scaleY: 0.5,
    ease: 'Linear',
    duration: 2000,
    repeat: 0,
    yoyo: false,
    onComplete: () => {
        this.scene.stop('home');
        this.scene.start('scene1');
        isStart = true;
    }
});
