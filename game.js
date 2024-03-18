var config = {
    type: Phaser.AUTO,
    width: 9600,
    height: 1080,
    parent: game,
    playerSpeed: 500,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 100 },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var score = 0;
var scoreText;
var game = new Phaser.Game(config);
var TimerText;
var worldWidth = 1920 * 2;
var player
var reserF
var myButton = document.getElementById('myButton');
var live = 3;
var enemy;
var heart;





function preload() {
    // завантажимо асети
    //this.load.image('sky', 'assets/sky.png');
    this.load.image('fon+', 'assets/fon+.jpg')
    this.load.image('fon', 'assets/fon.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.image('sk', 'assets/sk.png');
    this.load.image('BigP', 'assets/BigP.png');
    this.load.image('RAm', 'assets/rampage.png');
    this.load.image('stone', 'assets/stone.png');
    this.load.image('cube', 'assets/oxi.png');
    this.load.image('plant', 'assets/plant.png');
    // платформи з 3 ступенів
    this.load.image('center', 'assets/center.png');
    this.load.image('left', 'assets/left.png');
    this.load.image('right', 'assets/right.png');
    this.load.image('resetB', 'assets/resetb.png');
    this.load.image('heart', 'assets/heart.png');


    this.load.spritesheet('enemy',
    'assets/enemy.png',
    { frameWidth: 32, frameHeight: 48 }
);
    this.load.spritesheet('dude',
        'assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );

    this.load.spritesheet('foon',
        'assets/foon.png',
        { frameWidth: 200, frameHeight: 188 }
    );

}
var platforms;
var stones;
var cube;
var plant;

function create() {


    // Додамо ігровий світ
    this.add.tileSprite(0, 0, worldWidth, 1080, "fon+")
        .setOrigin(0, 0)
        .setDepth(0);


    // Створимо гравця
    player = this.physics.add.sprite(1000, 450, 'dude');
    player
        .setBounce(0.2)
        .setDepth(5)
        .setCollideWorldBounds(true)
        .setScale(3);


    // Додамо камеру
    this.cameras.main.setBounds(0, 0, worldWidth, 1080);
    this.physics.world.setBounds(0, 0, worldWidth, 1080);

    // Камера слідкує за гравцем
    this.cameras.main.startFollow(player);

    // Додамо платформи
    platforms = this.physics.add.staticGroup();
    Bigplatforms = this.physics.add.staticGroup();
    stone = this.physics.add.staticGroup();
    cube = this.physics.add.staticGroup();
    plant = this.physics.add.staticGroup();
    heart = this.physics.add.staticGroup();
    // Створимо ворога
    enemy = this.physics.add.sprite(1400, 450, 'enemy');
    enemy
        .setBounce(0.2)
        .setDepth(5)
        .setCollideWorldBounds(true)
        .setScale(3);

        this.physics.add.collider(enemy, platforms);
    this.physics.add.collider(enemy, Bigplatforms);
    this.physics.add.collider(enemy, player);
    enemy.setCollideWorldBounds(true);




    // Створимо платформи заздалегідь
    for (var x = 0; x < worldWidth; x = x + 650) {
        var y = Phaser.Math.FloatBetween(100, 900)
        var o = 0; o < worldWidth; o = o + Phaser.Math.FloatBetween(0, 1)
       
        // ліво
        platforms.create(x, y, 'left')
            .setOrigin(0, 0)
            .refreshBody();
        // центр
        platforms.create(x + 128, y, 'center')
            .setOrigin(0, 0)
            .refreshBody();
        // право
        platforms.create(x + 128 * 2, y, 'right')
            .setOrigin(0, 0)
            .refreshBody();
            //
            cube.create(x, y - 130, 'cube')
            .setOrigin(0, 0)
                .setScale(o)
                .refreshBody();
                //
                plant.create(x, y - 130, 'plant')
                .setOrigin(0,0)
                    .refreshBody();

        // Bigplatforms.create(x, 1080 - 50, 'BigP').setOrigin(0, 0).refreshBody();
    }

    // Платформи випадковим чином
    for (var x = 0; x < worldWidth; x = x + Phaser.Math.FloatBetween(0, 750)) {
        var y = Phaser.Math.FloatBetween(100, 700)

        // Bigplatforms.create(x + 200, y + 600, 'BigP')
        //     .setOrigin(0, 0)
        //     .refreshBody();


        stone.create(x, y, 'stone')
            .setScale(o)
            .refreshBody()
            .setDepth(Phaser.Math.Between(1, 10));


    }

    for (var x = 0; x < worldWidth; x = x + Phaser.Math.FloatBetween(0, 750)) {
        var y = Phaser.Math.FloatBetween(100, 700)
        var o = 0; o < worldWidth; o = o + Phaser.Math.FloatBetween(1, 2)

        Bigplatforms.create(x, 1050, 'BigP')
             .setOrigin(0, 0)
             .refreshBody();
            
            

            
            
                


                var y = Phaser.Math.FloatBetween(0, 1000)
                plant.create(x, 900, 'plant')
                .setOrigin(0,0)
                    .setScale(o)
                    .refreshBody();


    }

    
    //камінчики
    this.physics.add.collider(player, enemy, hitenemy, null, this);
    
    

    for (var x = 0; x < worldWidth; x = x + Phaser.Math.FloatBetween(0, 750)) {
        
    }







    // Створимо анімації
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    // Інші анімації...

    // Курсор
    cursors = this.input.keyboard.createCursorKeys();

    

    //ogogog




    // додамо платформи





    //Великі Платформи

    // Bigplatforms.create(600, 1100, 'BigP').setScale(2).refreshBody();
    // Bigplatforms.create(1400, 1100, 'BigP').setScale(2).refreshBody();
    // Bigplatforms.create(700, 523, 'BigP').setScale(0.5).refreshBody();
    // Bigplatforms.create(1020, 523, 'BigP').setScale(0.5).refreshBody();
    // Bigplatforms.create(1000, 523, 'BigP').setScale(0.5).refreshBody();
    // Bigplatforms.create(200, 700, 'BigP').setScale(0.25).refreshBody();
    // Bigplatforms.create(200, 300, 'BigP').setScale(0.25).refreshBody();
    // Bigplatforms.create(300, 450, 'BigP').setScale(0.25).refreshBody();
    // Bigplatforms.create(1200, 700, 'BigP').setScale(0.25).refreshBody();
    // Bigplatforms.create(1400, 300, 'BigP').setScale(0.25).refreshBody();
    // Bigplatforms.create(1300, 450, 'BigP').setScale(0.25).refreshBody();
    // Bigplatforms.create(800, 700, 'BigP').setScale(0.25).refreshBody();
    // Bigplatforms.create(1400, 370, 'BigP').setScale(0.25).refreshBody();
    // Bigplatforms.create(900, 320, 'BigP').setScale(0.5).refreshBody();
    // Bigplatforms.create(700, 300, 'BigP').setScale(0.25).refreshBody();
    // Bigplatforms.create(1300, 1450, 'BigP').setScale(0.25).refreshBody();
    // Bigplatforms.create(1200, 700, 'BigP').setScale(0.25).refreshBody();
    // Bigplatforms.create(600, 900, 'BigP').setScale(0.25).refreshBody();
    // Bigplatforms.create(1300, 1450, 'BigP').setScale(0.25).refreshBody();
    // Bigplatforms.create(800, 1700, 'BigP').setScale(0.25).refreshBody();
    // Bigplatforms.create(1400, 1300, 'BigP').setScale(0.25).refreshBody();
     heart.create(1000, 950, 'heart').setScale(0.5).refreshBody();
//

    

    cube.create(1000, 500, 'cube').setScale(0.5).refreshBody();


    // гіфка

    foon = this.physics.add.sprite(800, 450, 'foon');
    foon.setBounce(0.2);
    foon.setCollideWorldBounds(true);
    this.physics.add.collider(foon, platforms);
    this.physics.add.collider(foon, Bigplatforms);



    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, Bigplatforms);
    // створимо анімації
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
    // додамо курсор
    cursors = this.input.keyboard.createCursorKeys();


    // Додали фізику зіркам
    stars = this.physics.add.group({
        key: 'star',
        repeat: 110,
        setXY: { x: 202, y: 0, stepX: 70 }
    });
// enemy anim
    this.anims.create({
        key: 'left1',
        frames: this.anims.generateFrameNumbers('enemy', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'left2',
        frames: this.anims.generateFrameNumbers('enemy', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    stars.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });
// lives


    // Текс рахунку що додає бомби
    scoreText = this.add.text(825, 16, 'score: 0', { fontSize: '32px', fill: '#000' })
    .setOrigin(0, 0)
    .setScrollFactor(0);
    liveText = this.add.text(1600, 100, showLive(), { fontSize: '40px', fill: '#000' })
    .setOrigin(0, 0)
    .setScrollFactor(0);


    playerName = this.add.text(825, -4, 'Діма Найк', { fontSize: '32px', fill: '#000' });
    dlayerName = this.add.text(525, -4, 'press key down!', { fontSize: '32px', fill: '#000' });
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(stars, Bigplatforms);


    this.physics.add.overlap(player, stars, collectStar, null, this);

    bombs = this.physics.add.group();

    this.physics.add.collider(bombs, platforms);

    this.physics.add.collider(bombs, Bigplatforms);
    this.physics.add.collider(player, bombs, hitBomb, null, this);

    //
    
    this.physics.add.collider(heart, player);
    this.physics.add.collider(player, heart, heal, null, this);
    heart = this.physics.add.group();

    // секундомір
    // Додайте текст для відображення таймера




}

function update() {
    //грав кооор дин
    //console.log(player.x)


    //курсор
    cursors = this.input.keyboard.createCursorKeys();
    // керування кнопками


    if (cursors.left.isDown) {
        player.setVelocityX(-config.playerSpeed);
        player.anims.play('left', true);
        enemy.anims.play('left', true);
        enemy.setVelocityX(-650);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(config.playerSpeed);
        player.anims.play('right', true);
        enemy.anims.play('right', true);
        enemy.setVelocityX(650);
    }
    else {
        player.setVelocityX(0);

        player.anims.play('turn');

    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }
    if (cursors.down.isDown) { // Перевірка, чи немає bomb

        var x = (player.x < 400) ? Phaser.Math.Between(800, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(800, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setScale(3);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 10);
        
        var bomb = bombs.create(800, 16, 'enemy');
        bomb.setBounce(1);
        bomb.setScale(2);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 10);
        bomb.anims.play('left1', true);
        bomb.anims.play('left2', true);
        
    }

}
// Оновлення тексту таймера



// збір зірочок
function collectStar(player, star) {
    star.disableBody(true, true);
    score += 10;
    scoreText.setText('Score: ' + score);
    document.getElementById('score').innerText = score

    if (stars.countActive(true) === 0) {
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setScale(2);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 10);
        
        

        

    }
}

function showLive(){
    var lifeLine = ''

    for(var i = 0; i < live; i++ ){
    lifeLine += '😎'
console.log(live)
}
return lifeLine
}


// бомби
function hitBomb(player, bomb) {
    if (live == 1)this.physics.pause();

    player.setTint(0xff0000);
live -= 1
liveText.setText(showLive());

console.log('boom')
    player.anims.play('turn');

    if (live == 0) gameOver = true;
    
}
//
function hitenemy(player, enemy) {

    var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setScale(2);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 10);

}
function heal(player, bomb) {
    live +=1
    liveText.setText(showLive());
    
}

        
        

        








