var config = {
    type: Phaser.AUTO,
    width: 9600,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
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
var worldWidth = 9600;
var player


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
    this.add.tileSprite(0, 0, worldWidth, 1080, "fon+").setOrigin(0, 0);
    

    // Додамо платформи
    platforms = this.physics.add.staticGroup();
    Bigplatforms = this.physics.add.staticGroup();
    stone = this.physics.add.staticGroup();
    cube = this.physics.add.staticGroup();
    plant = this.physics.add.staticGroup();
    


    // Створимо платформи заздалегідь
    for (var x = 0; x < worldWidth; x = x + 650) {
        platforms.create(x, 1080 - 120, 'ground').setOrigin(0, 0).refreshBody();
        Bigplatforms.create(x, 1080 - 50, 'BigP').setOrigin(0, 0).refreshBody();
    }

    // Платформи випадковим чином
    for (var x = 0; x < worldWidth; x = x + Phaser.Math.FloatBetween(0, 750)) {
        var y = Phaser.Math.FloatBetween(0, 1000)
        platforms.create(x, y, 'ground').setOrigin(1, 3).refreshBody();
        Bigplatforms.create(x, y, 'BigP').setOrigin(0, 0).refreshBody();
        stone.create(x, y + 100 , 'stone').setScale(o).refreshBody();
        
    }
//камінчики
    

for (var x = 0; x < worldWidth; x = x + Phaser.Math.FloatBetween(0, 750)) {
    var o = 0; o < worldWidth; o = o + Phaser.Math.FloatBetween(0,3)
    

    var y = Phaser.Math.FloatBetween(0, 1000)
    cube.create(x, y, 'cube').setScale(o).refreshBody();
}

    for (var x = 0; x < worldWidth; x = x + Phaser.Math.FloatBetween(0, 750)) {
        var o = 0; o < worldWidth; o = o + Phaser.Math.FloatBetween(0,3)
        

        var y = Phaser.Math.FloatBetween(0, 1000)
        plant.create(x, 950, 'plant').setScale(o).refreshBody();
    }

    

    // Створимо гравця
    player = this.physics.add.sprite(100, 450, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    
    

    // Додамо камеру
    this.cameras.main.setBounds(0, 0, worldWidth, 1080);
    this.physics.world.setBounds(0, 0, worldWidth, 1080);

    // Камера слідкує за гравцем
    this.cameras.main.startFollow(player);

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

     //cam
     this.cameras.main.setBounds(0, 0, worldWidth, 1080);
     this.physics.world.setBounds(0, 0, worldWidth, 1080);
 
     //камера слідкує
     this.cameras.main.startFollow(player);
     // гравець
 
//ogogog




    // додамо платформи


    platforms.create(150, 1008, 'ground').setScale(1).refreshBody();
    platforms.create(400, 1000, 'ground').setScale(2).refreshBody();
    platforms.create(550, 1020, 'ground')
    platforms.create(750, 1000, 'ground')


    //Великі Платформи

    Bigplatforms.create(600, 1100, 'BigP').setScale(2).refreshBody();
    Bigplatforms.create(1400, 1100, 'BigP').setScale(2).refreshBody();
    Bigplatforms.create(700, 523, 'BigP').setScale(0.5).refreshBody();
    Bigplatforms.create(1020, 523, 'BigP').setScale(0.5).refreshBody();
    Bigplatforms.create(1000, 523, 'BigP').setScale(0.5).refreshBody();
    Bigplatforms.create(200, 700, 'BigP').setScale(0.25).refreshBody();
    Bigplatforms.create(200, 300, 'BigP').setScale(0.25).refreshBody();
    Bigplatforms.create(300, 450, 'BigP').setScale(0.25).refreshBody();
    Bigplatforms.create(1200, 700, 'BigP').setScale(0.25).refreshBody();
    Bigplatforms.create(1400, 300, 'BigP').setScale(0.25).refreshBody();
    Bigplatforms.create(1300, 450, 'BigP').setScale(0.25).refreshBody();
    Bigplatforms.create(800, 700, 'BigP').setScale(0.25).refreshBody();
    Bigplatforms.create(1400, 370, 'BigP').setScale(0.25).refreshBody();
    Bigplatforms.create(900, 320, 'BigP').setScale(0.5).refreshBody();
    Bigplatforms.create(700, 300, 'BigP').setScale(0.25).refreshBody();
    Bigplatforms.create(1300, 1450, 'BigP').setScale(0.25).refreshBody();
    Bigplatforms.create(1200, 700, 'BigP').setScale(0.25).refreshBody();
    Bigplatforms.create(600, 900, 'BigP').setScale(0.25).refreshBody();
    Bigplatforms.create(1300, 1450, 'BigP').setScale(0.25).refreshBody();
    Bigplatforms.create(800, 1700, 'BigP').setScale(0.25).refreshBody();
    Bigplatforms.create(1400, 1300, 'BigP').setScale(0.25).refreshBody();
    Bigplatforms.create(900, 1300, 'BigP').setScale(0.5).refreshBody();

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
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });


    // Текс рахунку що додає бомби
    scoreText = this.add.text(825, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    playerName = this.add.text(825, -4, 'Діма Найк', { fontSize: '32px', fill: '#000' });
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(stars, Bigplatforms);


    this.physics.add.overlap(player, stars, collectStar, null, this);

    bombs = this.physics.add.group();

    this.physics.add.collider(bombs, platforms);

    this.physics.add.collider(bombs, Bigplatforms);
    this.physics.add.collider(player, bombs, hitBomb, null, this);

    //


    // секундомір
    // Додайте текст для відображення таймера
    



}

function update() {
    //грав кооор дин
    console.log(player.x)


    //курсор
    cursors = this.input.keyboard.createCursorKeys();
    // керування кнопками


    if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.anims.play('left', true);

    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else {
        player.setVelocityX(0);

        player.anims.play('turn');

    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }
    if (cursors.down.isDown) { // Перевірка, чи немає bomb

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setScale(3);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 10);
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

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setScale(2);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 10);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setScale(2);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 10);

    }
}




// бомби
function hitBomb(player, bomb) {
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    gameOver = true;
}



