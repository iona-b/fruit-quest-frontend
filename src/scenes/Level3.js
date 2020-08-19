import Phaser from 'phaser';

export default class Level3 extends Phaser.Scene {
    
    constructor(){
        super('level3')
    }

    preload() {

        this.load.image('tiles', 'terrain.png')
        this.load.tilemapTiledJSON('map', 'level-3.json')
        this.load.atlas('guy', 'virtual-guy.png', 'virtual-guy.json')
        this.load.image('brown background', 'brown-background.png')
        this.load.image('melon', 'melon.png')

        this.cursors = this.input.keyboard.createCursorKeys()
        this.scale.setGameSize(992, 608)

    }

    create() {

        // Map
        const map = this.make.tilemap({ key: 'map'})

        const background = map.addTilesetImage('brown', 'brown background', 16, 16)
        const backgroundLayer = map.createStaticLayer('background', background)

        const terrain = map.addTilesetImage('terrain', 'tiles', 16, 16)
        const tileset = map.createStaticLayer('terrain', terrain)
        tileset.setCollisionByProperty({collides : true})

        //Character
        this.guy = this.physics.add.sprite(20, 350, 'guy', 'run-1.png')
        this.anims.create({
            key: 'guy-idle',
            frames: this.anims.generateFrameNames('guy', { start: 1, end: 11, prefix: 'idle-', suffix: '.png' }),
            repeat: -1,
            frameRate: 15
        })
        this.anims.create({
            key: 'guy-walking-right',
            frames: this.anims.generateFrameNames('guy', { start: 1, end: 12, prefix: 'run-', suffix: '.png' }),
            repeat: -1,
            frameRate: 15
        })
        this.anims.create({
            key: 'guy-walking-left',
            frames: this.anims.generateFrameNames('guy', { start: 1, end: 12, prefix: 'run-', suffix: '-right.png' }),
            repeat: -1,
            frameRate: 15
        })
        this.anims.create({
            key: 'guy-jumping',
            frames: [{ key: 'guy', frame: 'jump.png' }]
        })


        // Objects
        const fruitLayer = map.getObjectLayer('foods')['objects']
        const melon = this.physics.add.staticGroup()
        fruitLayer.forEach(object => {
            let s = melon.create(object.x, object.y, 'melon')
            s.setScale(object.width/16, object.height/16); 
            s.setOrigin(0); 
            s.body.width = object.width; 
            s.body.height = object.height; 
        })
        

        this.physics.add.existing(this.guy)   
        this.guy.body.setCollideWorldBounds(true) 
        this.physics.add.collider(this.guy, tileset)
        
        this.camera = this.cameras.main.startFollow(this.guy, true)
        this.camera.setBounds(0, 0, 1984, 608)

        // object and guy collision
        this.physics.add.overlap(this.guy, melon, this.collectFruit, null, this)

        this.fruitScore = 0
        this.text = this.add.text(850, 20, `Fruit: ${this.fruitScore}`, {
            fontSize: '20px',
            fill: '#ffffff'
          });
        this.text.setScrollFactor(0);

          
    }
    
    collectFruit (player, strawberry) {
        strawberry.disableBody(true, true)
        this.fruitScore ++
        this.text.setText(`Fruits: ${this.fruitScore}`)
        return false
    }


    update() {

      if (this.cursors.left.isDown)
        {
            this.guy.setVelocityX(-160)
            this.guy.anims.play('guy-walking-left', true)
        }
        else if (this.cursors.right.isDown)
        {
            this.guy.setVelocityX(160)
            this.guy.anims.play('guy-walking-right', true)

        } 
        else 
        {
            this.guy.setVelocityX(0)

            this.guy.anims.play('guy-idle', true)
        }

        if (this.cursors.space.isDown || this.cursors.up.isDown) // && this.guy.body.onFloor())
        {
            this.guy.setVelocityY(-330)
        }
    } 


}