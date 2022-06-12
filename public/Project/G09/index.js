// import Phaser from 'Phaser';

// import ending1 from "./ending1";
// import thirdlevel from "./thirdlevel";

////third level 


let platforms;
let player;
let hearts;
let spider;
let s = 0;
let sc = 0;
let tweens;
let questions;
let gameOver = false;
let heart = 0;
let restartText;
let character;
let bombs;
let bombapperance = false;
let cursors;
let music;
let Score = 2;
let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11;
let respawntime = 0;
let tempobsticle;
let Groundspeed = 5;
let xevalue = 0;
let newGameBtnStyle = { font: '80px VT323', fill: '#fff', backgroundColor: '#000', align: 'center', fixedWidth: 350 };
let gamerun = false;
class secondlevel extends Phaser.Scene {
    constructor() {
        super('secondlevel');
    }
    preload() {
        this.load.audio('bgm', './assets/audio/BK Audio.mp3');
        this.load.image('sky', './assets/background.png');
        this.load.image('ground', './assets/platform.png');
        this.load.image('star', './assets/heart.png');
        this.load.spritesheet('dude1', './assets/ANSONlevel1.png', { frameWidth: 100, frameHeight: 158 });
        this.load.spritesheet('spiderse', './assets/spider.png', { frameWidth: 110, frameHeight: 80 });
    }

    create() {
        music = this.sound.add('bgm');
        music.play();
        this.add.image(490, 300, 'sky');
        this.add.image(0, 0, 'sky').setOrigin(0, 0);
        platforms = this.physics.add.staticGroup();
        platforms.create(450, 830, 'ground').setScale(0.5).refreshBody();
        platforms.create(800, 650, 'ground').setScale(0.5).refreshBody();
        platforms.create(50, 320, 'ground').setScale(0.5).refreshBody();
        platforms.create(650, 250, 'ground').setScale(0.5).refreshBody();
        platforms.create(1400, 230, 'ground').setScale(0.5).refreshBody();
        platforms.create(1920, 280, 'ground').setScale(0.5).refreshBody();
        platforms.create(1800, 450, 'ground').setScale(0.5).refreshBody();
        platforms.create(1350, 800, 'ground').setScale(0.5).refreshBody();
        platforms.create(300, 500, 'ground').setScale(0.5).refreshBody();
        platforms.create(1000, 400, 'ground').setScale(0.5).refreshBody();
        platforms.create(1550, 620, 'ground').setScale(0.5).refreshBody();
        platforms.create(900, 1120, 'ground').setScale(3).refreshBody();
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude1', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude1', frame: 4 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude1', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('spiderse', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [{ key: 'spider', frame: 4 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('spiderse', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        spider = this.physics.add.sprite(500, 220, 'spiderse');
        spider.body.gravity.y = 300;
        player = this.physics.add.sprite(500, 700, 'dude1');
        player.setBounce(0.5);
        player.setCollideWorldBounds(true);
        player.body.gravity.y = 300;
        cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(player, platforms, (res) => {
            if (res.body.touching.up) console.log("hit ceil");
        });
        hearts = this.physics.add.group({
            key: 'star',
            repeat: 4,
            setXY: { x: 200, y: 120, stepX: 270 }
        });
        hearts.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            child.body.gravity.y = 300;
        });
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(hearts, platforms);
        this.physics.add.collider(player, spider, () => {
            this.scene.start('ending2');
        });
        this.physics.add.collider(spider, platforms);
        this.physics.add.overlap(player, hearts, this.collectStar, null, this);//偵測玩家是否蒐集到星星、玩家與星星位置是否重疊
        spider.scene.tweens.add({
            targets: spider,
            gravity: false,
            x: 1000,
            ease: 'Linear',
            repeat: -1,
            yoyo: true
        });

    }

    update() {
        if (cursors.left.isDown) {
            player.setVelocityX(-160);
            player.anims.play('left', true);
        } else if (cursors.right.isDown) {
            player.setVelocityX(160);
            player.anims.play('right', true);
        } else {
            player.setVelocityX(0);
            player.anims.play('turn');
        } if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-330);
        }

    }



    collectStar(player, heart) {
        heart.destroy(true);
        sc += 10;

        if (sc >= 50) {
            xevalue++;
            this.scene.remove('secondlevel');
            this.scene.start('scene0');

        }

    }
}
class Startscene extends Phaser.Scene {
    constructor() {
        super('Startscene');
    }
    preload() {
        this.load.audio('bgm', './assets/audio/BK Audio.mp3');
        this.load.image('background99', 'assets/background999.png');
    }
    create() {
        // this.input.on('pointerup', changeColor, this);
        music = this.sound.add('bgm');
        music.play();
        this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'background99');
        this.newGameBtnText = this.add.text(this.game.config.width / 2 - 200, config.height / 3 * 2, 'Start game', newGameBtnStyle);
        this.newGameBtnText.setInteractive();
        this.newGameBtnText.on('pointerdown', () => {
            this.newGameBtnText.visible = false;
            this.newGameBtnText.disableInteractive;
            this.time.addEvent({
                loop: false,
                delay: 1000,
            });
            this.scene.start('scene0');
        });
    }
}
class firstlevel extends Phaser.Scene {
    constructor() {
        super('firstlevel');
    }
    preload() {
        this.load.audio('bgm', './assets/audio/BK Audio.mp3');
        this.load.image('sky', './assets/sky.png');
        this.load.image('g', './assets/platform1.png');
        this.load.image('star', './assets/star.png');
        this.load.image('bomb', './assets/eye.png');
        this.load.spritesheet('dude', './assets/dude.png', { frameWidth: 98, frameHeight: 130 });
    }

    create() {
        music = this.sound.add('bgm');
        music.play();
        this.add.image(540, 360, 'sky');
        platforms = this.physics.add.staticGroup();
        platforms.create(540, 720, 'g').setScale(3).refreshBody();
        platforms.create(900, 515, 'g').setScale(1).refreshBody();
        platforms.create(320, 400, 'g').setScale(1).refreshBody();

        player = this.physics.add.sprite(120, 525, 'dude');
        player.setBounce(0.12);
        player.setCollideWorldBounds(true);
        player.body.gravity.y = 300;

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });


        cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(player, platforms, (res) => {
            if (res.body.touching.up) console.log("hit ceil");
        });

        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 14,

            setXY: { x: 36, y: 0, stepX: 72 }
        });

        this.stars.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.6));
            child.body.gravity.y = 300;
        });
        this.physics.add.collider(this.stars, platforms);

        this.physics.add.overlap(player, this.stars, this.collectStar, null, this);



        bombs = this.physics.add.group();
        bombs.children.iterate(function (child) {

        });
        //bombs.setCollideWorldBounds(true);
        this.physics.add.collider(bombs, platforms);
        this.physics.add.collider(player, bombs, this.hitBomb, null, this);



    }

    hitBomb() {
        this.scene.start('ending2');
        gameOver = true;
    }

    collectStar(player, star) {
        star.disableBody(true, true);



        if (this.stars.countActive(true) === 0) {
            heart += 1;
            if (heart >= 2) {
                xevalue++;
                this.scene.remove('firstlevel');
                this.scene.run('scene0');
            }
            this.stars.children.iterate(function (child) {
                child.enableBody(true, child.x, 0, true, true);
            });
            let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
            let bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setBodySize(50, 50);//shithappen
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 50);
            bomb.allowGravity = false;
            bombapperance = true;

        }
    }

    update() {
        // if(player.body.touching.down){
        //     if (cursors.left.isDown){
        //         player.setVelocityX(-160);
        //         player.anims.play('left', true);
        //     } else if (cursors.right.isDown){
        //         player.setVelocityX(160);
        //         player.anims.play('right', true);
        //     } else {
        //         player.setVelocityX(0);
        //         player.anims.play('turn');
        //     } 

        // }
        if (cursors.left.isDown) {
            player.setVelocityX(-160);
            player.anims.play('left', true);
        } else if (cursors.right.isDown) {
            player.setVelocityX(160);
            player.anims.play('right', true);
        } else {
            player.setVelocityX(0);
            player.anims.play('turn');
        } if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-330);
        }
        if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-350);
        }


        if (bombapperance) {
            bombs.children.iterate(function (child) {

                const distanceX = player.x - bombs.x
                if (distanceX > 0) {
                    //bomb.setBounce(1);
                    bombs.setVelocityX(100)

                } else if (distanceX < 0) {
                    //bomb.setBounce(1);
                    bombs.setVelocityX(-100)

                }
            });
        }
    }

}
class notescene extends Phaser.Scene {
    constructor() {
        super('notescene');
    }
    preload() {
        this.load.image('note1', './assets/note1.png');
        this.load.image('note2', './assets/note2.png');
        this.load.image('note3', './assets/note3.png');
        this.load.image('note4', './assets/note4.png');
        this.load.image('note5', './assets/note5.png');
        this.load.image('note6', './assets/note6.png');
        this.load.image('note7', './assets/note7.png');
    }
    create() {
        img7 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'note7').setAlpha(0);
        img6 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'note6').setAlpha(0);
        img5 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'note5').setAlpha(0);
        img4 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'note4').setAlpha(0);
        img3 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'note3').setAlpha(0);
        img2 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'note2').setAlpha(0);
        img1 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'note1').setAlpha(0);

        if (s == 10) {
            this.end1 = this.tweens.add({
                targets: img1,
                autoStart: true,
                paused: false,
                duration: 4000,
                delay: 2000,
                ease: 'Back',
                alpha: {
                    getStart: () => 0,
                    getEnd: () => 100,
                    endnum: +1,
                },
                yoyo: false,
                loop: 0,
                onComplete: () => {

                    this.end2.play();
                    this.end1.stop();
                }
            })
            this.end2 = this.tweens.add({
                targets: img2,
                autoStart: false,
                paused: true,
                duration: 7000,
                delay: 3000,
                onStart: () => {
                    img1.alpha = 0;
                },
                ease: 'Back',
                alpha: {
                    getStart: () => 0,
                    getEnd: () => 100,
                    endnum: +1,
                },
                onComplete: () => {
                    // this.end2.stop();
                    this.scene.pause('notescene');
                    this.scene.start('firstlevel');
                },
                yoyo: false,
                loop: 0,
            })
        }
        if (s == 20) {
            this.end3 = this.tweens.add({
                targets: img3,
                autoStart: true,
                paused: false,
                duration: 4000,
                delay: 2000,
                ease: 'Back',
                alpha: {
                    getStart: () => 0,
                    getEnd: () => 100,
                    endnum: +1,
                },
                yoyo: false,
                loop: 0,
                onComplete: () => {

                    this.end4.play();
                    this.end3.stop();
                }
            })
            this.end4 = this.tweens.add({
                targets: img4,
                autoStart: false,
                paused: true,
                duration: 7000,
                delay: 3000,
                onStart: () => {
                    img1.alpha = 0;
                },
                ease: 'Back',
                alpha: {
                    getStart: () => 0,
                    getEnd: () => 100,
                    endnum: +1,
                },
                onComplete: () => {
                    // this.end2.stop();
                    this.scene.pause('notescene');
                    this.scene.start('secondlevel');
                },
                yoyo: false,
                loop: 0,
            })
        }
        if (s == 30) {
            this.end5 = this.tweens.add({
                targets: img5,
                autoStart: true,
                paused: false,
                duration: 4000,
                delay: 2000,
                ease: 'Back',
                alpha: {
                    getStart: () => 0,
                    getEnd: () => 100,
                    endnum: +1,
                },
                yoyo: false,
                loop: 0,
                onComplete: () => {

                    this.end6.play();
                    this.end5.stop();
                }
            })
            this.end6 = this.tweens.add({
                targets: img6,
                autoStart: false,
                paused: true,
                duration: 7000,
                delay: 3000,
                onStart: () => {
                    img1.alpha = 0;
                },
                ease: 'Back',
                alpha: {
                    getStart: () => 0,
                    getEnd: () => 100,
                    endnum: +1,
                },
                onComplete: () => {
                    this.end7.play();
                    this.end6.stop();
                },
                yoyo: false,
                loop: 0,
            })
            this.end7 = this.tweens.add({
                targets: img7,
                autoStart: false,
                paused: true,
                duration: 7000,
                delay: 3000,
                onStart: () => {
                    img1.alpha = 0;
                },
                ease: 'Back',
                alpha: {
                    getStart: () => 0,
                    getEnd: () => 100,
                    endnum: +1,
                },
                onComplete: () => {
                    // this.end2.stop();
                    this.scene.remove('notescene');
                    this.scene.run('thirdlevel');
                },
                yoyo: false,
                loop: 0,
            })
        }

    }
}
class scene0 extends Phaser.Scene {
    constructor() {
        super('scene0');
    }

    preload() {

        this.load.audio('bgm', './assets/audio/BK Audio.mp3');
        this.load.image('sky', './assets/background.png');
        this.load.image('ground', './assets/platform.png');
        this.load.image('question', './assets/問號.png');
        this.load.spritesheet('dude', './assets/ANSONlevel1.png', { frameWidth: 100, frameHeight: 158 });
    }

    create() {
        music = this.sound.add('bgm');
        music.play();
        this.add.image(490, 300, 'sky');
        this.add.image(0, 0, 'sky').setOrigin(0, 0);
        platforms = this.physics.add.staticGroup();
        platforms.create(450, 830, 'ground').setScale(0.7).refreshBody();
        platforms.create(800, 650, 'ground').setScale(0.7).refreshBody();
        platforms.create(50, 480, 'ground').setScale(0.7).refreshBody();
        platforms.create(900, 470, 'ground').setScale(0.6).refreshBody();
        platforms.create(2000, 500, 'ground').setScale(0.7).refreshBody();
        platforms.create(1350, 800, 'ground').setScale(0.6).refreshBody();
        platforms.create(900, 1120, 'ground').setScale(3).refreshBody();
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        player = this.physics.add.sprite(100, 700, 'dude');
        player.setBounce(0.5);
        player.setCollideWorldBounds(true);
        player.body.gravity.y = 300;
        cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(player, platforms, (res) => {
            if (res.body.touching.up) console.log("hit ceil");
        });

        this.question1 = this.physics.add.image(600, 50, 'question');
        this.question2 = this.physics.add.image(600 + 580, 50, 'question');
        this.question3 = this.physics.add.image(600 + 1160, 50, 'question');
        this.question1.body.gravity.y = 600;
        this.question2.body.gravity.y = 600;
        this.question3.body.gravity.y = 600;
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(this.question1, platforms);
        this.physics.add.overlap(player, this.question1, this.collectStar, null, this);
        this.physics.add.collider(this.question2, platforms);
        this.physics.add.overlap(player, this.question2, this.collectStar, null, this);
        this.physics.add.collider(this.question3, platforms);
        this.physics.add.overlap(player, this.question3, this.collectStar, null, this);

        if (xevalue == 1) {
            this.question1.destroy();
        }
        else if (xevalue == 2) {
            this.question1.destroy();
            this.question2.destroy();
        }
    }

    update() {
        if (cursors.left.isDown) {
            player.setVelocityX(-160);
            player.anims.play('left', true);
        } else if (cursors.right.isDown) {
            player.setVelocityX(160);
            player.anims.play('right', true);
        } else {
            player.setVelocityX(0);
            player.anims.play('turn');
        } if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-330);
        }
    }

    collectStar(player, question) {
        question.destroy(true);
        if (s == 0) {
            this.scene.pause('scene0');
            this.scene.start('notescene');
            s += 10;
        }
        else if (s == 10) {
            this.scene.pause('scene0');
            this.scene.start('notescene');
            s += 10;

        }
        else if (s == 20) {
            this.scene.remove('scene0');
            this.scene.run('notescene');
            s += 10;

        }


        console.log('stars.countActive(true)');

    }

}

class ending2 extends Phaser.Scene {

    constructor() {
        super('ending2');

    }
    preload() {
        this.load.audio('bgm', './assets/audio/BK Audio.mp3');
        this.load.image('end1', './assets/lose1.png');
        this.load.image('end2', './assets/lose2.png');
        this.load.image('end3', './assets/lose3.png');
        this.load.image('end4', './assets/lose4.png');
        this.load.image('end5', './assets/lose5.png');
        this.load.image('end6', './assets/lose6.png');
    }
    create() {
        music = this.sound.add('bgm');
        music.play();
        img6 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end6').setAlpha(0);
        img5 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end5').setAlpha(0);
        img4 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end4').setAlpha(0);
        img3 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end3').setAlpha(0);
        img2 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end2').setAlpha(0);
        img1 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end1').setAlpha(0);
        this.end1 = this.tweens.add({
            targets: img1,
            autoStart: true,
            paused: false,
            duration: 3000,
            delay: 3000,
            ease: 'Back',
            alpha: {
                getStart: () => 0,
                getEnd: () => 100,
                endnum: +1,
            },
            yoyo: false,
            loop: 0,
            onComplete: () => {

                this.end2.play();
                this.end1.stop();
            }
        })
        this.end2 = this.tweens.add({
            targets: img2,
            autoStart: false,
            paused: true,
            duration: 3000,
            delay: 3000,
            onStart: () => {
                img1.alpha = 0;
            },
            ease: 'Back',
            alpha: {
                getStart: () => 0,
                getEnd: () => 100,
                endnum: +1,
            },
            onComplete: () => {
                this.end2.stop();
                this.end3.play();
            },
            yoyo: false,
            loop: 0,
        })
        this.end3 = this.tweens.add({
            targets: img3,
            autoStart: false,
            paused: true,
            duration: 3000,
            delay: 3000,
            onStart: () => {
                img2.alpha = 0;
            },
            ease: 'Back',
            alpha: {
                getStart: () => 0,
                getEnd: () => 100,
                endnum: +1,
            },
            onComplete: () => {
                //this.end3.autostart = true;
                this.end4.play();
                this.end3.stop();
            },
            yoyo: false,
            loop: 0,
        })
        this.end4 = this.tweens.add({
            targets: img4,
            autoStart: false,
            paused: true,
            duration: 3000,
            delay: 3000,
            onStart: () => {
                img3.alpha = 0;
            },
            ease: 'Power1',
            alpha: {
                getStart: () => 0,
                getEnd: () => 100,
                endnum: +1,
            },
            onComplete: () => {

                this.end5.play();
                this.end4.stop();
            },
            yoyo: false,
            loop: 0,
        })
        this.end5 = this.tweens.add({
            targets: img5,
            autoStart: false,
            paused: true,
            onStart: () => {
                img4.alpha = 0;
            },
            duration: 3000,
            delay: 1000,
            ease: 'Power1',
            alpha: {
                getStart: () => 0,
                getEnd: () => 100,
                endnum: +1,
            },
            onComplete: () => {

                this.end6.play();
                this.end5.stop();
            },
            yoyo: false,
            loop: 0,
        })
        this.end6 = this.tweens.add({
            targets: img6,
            autoStart: false,
            paused: true,
            duration: 3000,
            onStart: () => {
                img5.alpha = 0;
            },
            delay: 1000,
            ease: 'Power1',
            alpha: {
                getStart: () => 0,
                getEnd: () => 100,
                endnum: +1,
            },
            onComplete: () => {


                this.end6.stop();
            },
            yoyo: false,
            loop: 0,
        })
    }
}
class ending1 extends Phaser.Scene {

    constructor() {
        super('ending1');

    }
    preload() {
        this.load.audio('bgm', './assets/audio/BK Audio.mp3');
        this.load.image('note1', './assets/日記1.png');
        this.load.image('end1', './assets/9.png');
        this.load.image('end2', './assets/10.png');
        this.load.image('end3', './assets/11.png');
        this.load.image('end4', './assets/GoodEnd1.png');//圖
        this.load.image('end5', './assets/GoodEnd2.png');
        this.load.image('end6', './assets/GoodEnd3.png');
        this.load.image('end7', './assets/GoodEnd4.png');
        this.load.image('end8', './assets/GoodEnd5.png');
        this.load.image('end9', './assets/GoodEnd6.png');
        this.load.image('end10', './assets/GoodEnd7.png');
        this.load.image('end11', './assets/GoodEnd8.png');
    }

    create(data) {

        this.game.config.width = 1500;
        this.game.config.height = 700;


        // img2 = this.add.image(data.x, data.y, 'end2');
        img11 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end11').setAlpha(0);
        img10 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end10').setAlpha(0);
        img9 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end9').setAlpha(0);
        img8 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end8').setAlpha(0);
        img7 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end7').setAlpha(0);
        img6 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end6').setAlpha(0);
        img5 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end5').setAlpha(0);
        img4 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end4').setAlpha(0);
        img3 = this.add.image(this.game.config.width / 2 + 200, this.game.config.height / 2, 'end3').setAlpha(0);
        img2 = this.add.image(this.game.config.width / 2 + 200, this.game.config.height / 2, 'end2').setAlpha(0);
        img1 = this.add.image(this.game.config.width / 2 + 200, this.game.config.height / 2, 'end1').setAlpha(0);



        this.end1 = this.tweens.add({
            targets: img1,
            autoStart: true,
            paused: false,
            duration: 3000,
            delay: 3000,
            ease: 'Back',
            alpha: {
                getStart: () => 0,
                getEnd: () => 100,
                endnum: +1,
            },
            yoyo: false,
            loop: 0,
            onComplete: () => {

                this.end2.play();
                this.end1.stop();
            }
        })
        this.end2 = this.tweens.add({
            targets: img2,
            autoStart: false,
            paused: true,
            duration: 3000,
            delay: 3000,
            onStart: () => {
                img1.alpha = 0;
            },
            ease: 'Back',
            alpha: {
                getStart: () => 0,
                getEnd: () => 100,
                endnum: +1,
            },
            onComplete: () => {
                this.end2.stop();
                this.end3.play();
            },
            yoyo: false,
            loop: 0,
        })
        this.end3 = this.tweens.add({
            targets: img3,
            autoStart: false,
            paused: true,
            duration: 3000,
            delay: 3000,
            onStart: () => {
                img2.alpha = 0;
            },
            ease: 'Back',
            alpha: {
                getStart: () => 0,
                getEnd: () => 100,
                endnum: +1,
            },
            onComplete: () => {
                //this.end3.autostart = true;
                this.end4.play();
                this.end3.stop();
            },
            yoyo: false,
            loop: 0,
        })
        this.end4 = this.tweens.add({
            targets: img4,
            autoStart: false,
            paused: true,
            duration: 3000,
            delay: 3000,
            onStart: () => {
                img3.alpha = 0;
            },
            ease: 'Power1',
            alpha: {
                getStart: () => 0,
                getEnd: () => 100,
                endnum: +1,
            },
            onComplete: () => {

                this.end5.play();
                this.end4.stop();
            },
            yoyo: false,
            loop: 0,
        })
        this.end5 = this.tweens.add({
            targets: img5,
            autoStart: false,
            paused: true,
            onStart: () => {
                img4.alpha = 0;
            },
            duration: 3000,
            delay: 1000,
            ease: 'Power1',
            alpha: {
                getStart: () => 0,
                getEnd: () => 100,
                endnum: +1,
            },
            onComplete: () => {

                this.end6.play();
                this.end5.stop();
            },
            yoyo: false,
            loop: 0,
        })
        this.end6 = this.tweens.add({
            targets: img6,
            autoStart: false,
            paused: true,
            duration: 3000,
            onStart: () => {
                img5.alpha = 0;
            },
            delay: 1000,
            ease: 'Power1',
            alpha: {
                getStart: () => 0,
                getEnd: () => 100,
                endnum: +1,
            },
            onComplete: () => {

                this.end7.play();
                this.end6.stop();
            },
            yoyo: false,
            loop: 0,
        })
        this.end7 = this.tweens.add({
            targets: img7,
            autoStart: false,
            paused: true,
            duration: 3000,
            onStart: () => {
                img6.alpha = 0;
            },
            delay: 1000,
            ease: 'Power1',
            alpha: {
                getStart: () => 0,
                getEnd: () => 100,
                endnum: +1,
            },
            onComplete: () => {

                this.end8.play();
                this.end7.stop();
            },
            yoyo: false,
            loop: 0,
        })
        this.end8 = this.tweens.add({
            targets: img8,
            autoStart: false,
            paused: true,
            duration: 3000,
            delay: 1000,
            onStart: () => {
                img7.alpha = 0;
            },
            ease: 'Power1',
            alpha: {
                getStart: () => 0,
                getEnd: () => 100,
                endnum: +1,
            },
            onComplete: () => {

                this.end9.play();
                this.end8.stop();
            },
            yoyo: false,
            loop: 0,
        })
        this.end9 = this.tweens.add({
            targets: img9,
            onStart: () => {
                img8.alpha = 0;
            },
            autoStart: false,
            paused: true,
            duration: 3000,
            delay: 2000,
            ease: 'Power1',
            alpha: {
                getStart: () => 0,
                getEnd: () => 100,
                endnum: +1,
            },
            onComplete: () => {

                this.end10.play();
                this.end9.stop();
            },
            yoyo: false,
            loop: 0,
        })
        this.end10 = this.tweens.add({
            targets: img10,
            autoStart: false,
            paused: true,
            duration: 2000,
            onStart: () => {
                img9.alpha = 0;
            },
            delay: 2500,
            ease: 'Power1',
            alpha: {
                getStart: () => 0,
                getEnd: () => 100,
                endnum: +1,
            },
            onComplete: () => {

                this.end11.play();
                this.end10.stop();
            },
            yoyo: false,
            loop: 0,
        })
        this.end11 = this.tweens.add({
            targets: img11,
            autoStart: false,
            paused: true,
            duration: 2500,
            onStart: () => {
                img10.alpha = 0;
            },
            delay: 3000,
            ease: 'Power1',
            alpha: {
                getStart: () => 0,
                getEnd: () => 100,
                endnum: +1,
            },
            onComplete: () => {


                // this.end10.stop();
            },
            yoyo: false,
            loop: 0,
        })



        // this.tweens.add({
        //     targets: img1,
        //     duration: 3000,
        //     delay: 3000,
        //     ease: 'Power1',
        //     alpha: {
        //         getStart: () => 100,
        //         getEnd: () => 0,
        //         endnum: +1,
        //     },

        //     yoyo: false,
        //     loop: -1,
        //     onComplete: this.tweens.add({
        //         targets: img2,
        //         duration: 6000,
        //         delay: 6000,
        //         ease: 'Power1',
        //         alpha: {
        //             getStart: () => 100,
        //             getEnd: () => 0,
        //             endnum: +1,
        //         },
        //         loop: -1,
        //         yoyo: false,
        //         onComplete: this.tweens.add({
        //             targets: img3,
        //             duration: 6000,
        //             delay: 6000,
        //             ease: 'Power1',
        //             alpha: {
        //                 getStart: () => 100,
        //                 getEnd: () => 0,
        //                 endnum: +1,
        //             },
        //             loop: -1,
        //             yoyo: false,
        //             onComplete: this.tweens.add({
        //                 targets: img4,
        //                 duration: 6000,
        //                 delay: 6000,
        //                 ease: 'Power1',
        //                 alpha: {
        //                     getStart: () => 100,
        //                     getEnd: () => 0,
        //                     endnum: +1,
        //                 },
        //                 loop: -1,
        //                 yoyo: false,

        //             })
        //         })
        //     })


        // });//研究tweens


        // if (endnum == 1) {
        //     this.tweens.add({
        //         targets: img9,
        //         alphaTopLeft: { value: 1, duration: 5000, ease: 'Power1' },
        //         alphaBottomRight: { value: 1, duration: 10000, ease: 'Power1' },
        //         alphaBottomLeft: { value: 1, duration: 5000, ease: 'Power1', delay: 5000 },
        //         yoyo: true,
        //         duration: 300,
        //         ease: 'Power1'
        //     })
        //     endnum++;
        // } else if (endnum == 2) {
        //     this.tweens.add({
        //         targets: img9,
        //         alpha: 0,
        //         duration: 300,
        //         ease: 'Power1'
        //     })
        //     endnum++;
        // }


        // this.cameras.main.once('camerafadeoutcomplete', function (camera) {
        //     this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end2');
        //     camera.fadeIn(3000, 0);

        //     this.cameras.main.once('camerafadeincomplete', function (c) {
        //         this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end3');
        //         c.fadeIn(6000, 0);
        //         this.cameras.main.once('camerafadeincomplete', function () {
        //             this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end4')
        //             camera.fadeIn(6000, 0);
        //             this.cameras.main.once('camerafadeincomplete', function () {
        //                 this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end5')
        //                 camera.fadeIn(6000, 0);
        //                 this.cameras.main.once('camerafadeincomplete', function () {
        //                     this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end6')
        //                     camera.fadeIn(6000, 0);
        //                     this.cameras.main.once('camerafadeincomplete', function () {
        //                         this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end7')
        //                         camera.fadeIn(6000, 0);
        //                         this.cameras.main.once('camerafadeincomplete', function () {
        //                             this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end8')
        //                             camera.fadeIn(6000, 0);
        //                         }, this, 3000);
        //                     }, this, 3000);
        //                 }, this, 3000);
        //             }, this, 3000);
        //         }, this, 3000);
        //     }, this, 3000);
        // }, this, 3000);
        // this.cameras.main.fadeOut(1000, 0, 0, 0);

        //     this.cameras.main.once('camerafadeoutcomplete', function (camera) {
        //             this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'end2');
        //             camera.fadeIn(3000, 0);
        //     }, this, 3000);
        //  this.cameras.main.fadeOut(1000, 0, 0, 0);
    }






    update(time, delta) {

    }
}
class thirdlevel extends Phaser.Scene {

    constructor() {
        super('thirdlevel');

    }
    preload() {
        this.load.audio('bgm', './assets/audio/BK Audio.mp3');
        this.load.image('ground1', './assets/ground.png');
        this.load.image('background', './assets/background.jpg');
        this.load.image('anson-stop', './assets/anson-stop.png');
        this.load.image('anson-hurt', './assets/anson-hurt.png');
        this.load.image('obsticle-1', './assets/obsticle-1.png');
        this.load.image('back', './assets/background1.png');
        this.load.image('spiderth', './assets/spider1.png');//244X132, { frameWidth: 244, frameHeight: 132 }
        this.load.spritesheet('anson', './assets/anson-1.png', { frameWidth: 80, frameHeight: 144 })
    }


    create() {
        music = this.sound.add('bgm');
        music.play();
        this.startornot = false;
        this.height = 600;
        this.width = 3000;
        this.startBTN = this.physics.add.sprite(100, 600).setOrigin(0, 1).setImmovable(true);
        this.ground = this.add.tileSprite(100, this.height + 300, 80, 30, 'ground1').setOrigin(0, 1);
        this.standon = this.physics.add.sprite(100, 900).setOrigin(0, 1).setImmovable(true);
        this.standrun = this.physics.add.sprite(180, 920).setOrigin(0, 1).setImmovable(true);
        this.character = this.physics.add.sprite(100, this.height + 200, 'anson').setOrigin(0, 1);
        this.character.setCollideWorldBounds(true);
        this.character.setGravityY(5000);
        this.character.setBodySize(30, 170);
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('anson', { start: 0, end: 1 }),
            frameRate: 10,
            repeat: -1
        })
        this.tempobsticle = this.physics.add.group();
        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.overlap(this.startBTN, this.character, () => {
            if (this.startBTN.y === 600) {
                this.startBTN.body.reset(100, this.height);
            }
            this.startBTN.disableBody(true, true);
            const startEvent = this.time.addEvent({
                delay: 1000 / 60,
                loop: true,
                callbackScope: this,
                callback: () => {
                    this.character.setVelocityX(80);
                    this.character.play('run', 1);//anson anime

                    if (this.ground.width < this.width) {

                        this.ground.width += 25 * 2;
                        this.ground.x -= 10;
                    }
                    if (this.ground.width >= this.width) {
                        this.ground.width = this.width;
                        this.startornot = true;
                        this.character.setVelocityX(0);
                        startEvent.remove();
                    }
                }
            });
        }, null, this)
        this.physics.add.collider(this.character, this.standon);
        this.physics.add.collider(this.character, this.standrun);
        this.physics.add.collider(this.character, this.tempobsticle, () => {
            this.physics.pause();
            gamerun = false;
            this.anims.pauseAll();
            this.character.setTexture('anson-hurt');
            respawntime = 0;
            Groundspeed = 0;

            this.scene.start('ending2');


            //this.scene.start('ending1');
        }, null, this);


    }

    //yoyo 到目的地會回來





    update(time, delta) {



        Phaser.Actions.IncX(this.tempobsticle.getChildren(), -Groundspeed);


        respawntime += delta * Groundspeed * 0.08;


        if (respawntime >= 1500 && this.startornot == true) {
            let obsticle;
            const obsticleNum = Math.floor(Math.random() * 2) + 1;
            const distance = Phaser.Math.Between(600, 900);

            if (obsticleNum > 1) {


                obsticle = this.tempobsticle.create(this.width + distance, this.height + 290, 'spiderth').setOrigin(0, 1)
                obsticle.setDisplaySize(90, 70);
                obsticle.setBodySize(150, 80);

            } else {
                obsticle = this.tempobsticle.create(this.width + distance, this.height + 320, 'obsticle-1').setOrigin(0, 1);
                obsticle.setDisplaySize(179, 132);
                obsticle.setBodySize(570, 400);
                // obsticle.body.setOffset = +10;
            }
            respawntime = 0;
        }

        this.tempobsticle.getChildren().forEach(obsticle => {
            if (obsticle.getBounds().right < 0) {
                //console.log('destroy tempobsticle');
                obsticle.destroy();
                Score += 0.5;
                if (Score >= 13) {
                    this.scene.start('ending1');
                }
                Groundspeed += Score * 0.2;
                //console.log('score: ' + Score);


            }
        })





        if (this.character.body.velocity.y == 0) {
            if (this.cursors.up.isDown) {
                this.character.setVelocityY(-1200);
            } else if (!this.character.body.onFloor()) { return; };
        }
        if (!this.startornot) { return; }
        this.ground.tilePositionX += Groundspeed;


        if (this.character.body.deltaAbsY() > 0) {
            // this.character.anims.stop();//只要Y軸有動作就停止動畫
            this.character.play('run', true);

        } else {
            this.character.play('run', true);
        }


    }
}









//// ending1


const config =
{
    type: Phaser.AUTO,
    width: 1920,//2000
    height: 1080,//600
    pixelArt: true,
    //scrollbars:false,

    transparent: true,
    physics:
    {
        default: 'arcade',
        arcade:
        {
            debug: false,
            //gravity: { y: 300 }
        }
    },
    audio: {
        disableWebAudio: true
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.CENTER_BOTH
    },
    scene: [Startscene, scene0, firstlevel, secondlevel, thirdlevel, ending1, ending2, notescene]

};
new Phaser.Game(config);