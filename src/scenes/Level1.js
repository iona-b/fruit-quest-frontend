import Phaser from 'phaser';

export default class Level1 extends Phaser.Scene {
    
    constructor(){
        super('game')
    }

    preload() {

        this.load.image('tiles', 'level-1-terrain.png')
        this.load.image('cherries', 'cherries.png')
        this.load.image('cherry', 'cherry-object.png')
        this.load.image('strawberries', 'strawberries.png')
        this.load.image('bananas', 'bananas.png')
        this.load.image('trophy', 'trophy.png')
        this.load.image('purple background', 'purple-background.png')
        this.load.tilemapTiledJSON('map', 'level-2.json')
        this.load.atlas('guy', 'virtual-guy.png', 'virtual-guy.json')

        this.cursors = this.input.keyboard.createCursorKeys()
        this.scale.setGameSize(992, 608)

    }

    create() {

        // Map
        const map = this.make.tilemap({ key: 'map'})

        const background = map.addTilesetImage('purple-background', 'purple background', 16, 16)
        const backgroundLayer = map.createStaticLayer('background', background)
        
        const terrain = map.addTilesetImage('terrain', 'tiles', 16, 16)
        const tileset = map.createStaticLayer('terrain', terrain)
        tileset.setCollisionByProperty({collides : true})

        // Objects

        const cherries = map.addTilesetImage('cherries', 'cherries', 16, 16)
        this.cherriesLayer = map.createDynamicLayer('cherries', cherries)

        const strawberries = map.addTilesetImage('strawberries', 'strawberries', 16, 16)
        this.strawberriesLayer = map.createDynamicLayer('strawberries', strawberries)

        const bananas = map.addTilesetImage('bananas', 'bananas', 16, 16)
        const bananasLayer = map.createDynamicLayer('bananas', bananas)

        const trophy = map.addTilesetImage('trophy', 'trophy', 16, 16)
        const trophyLayer = map.createDynamicLayer('trophy', trophy)
        
        //Character
        this.guy = this.add.sprite(20, 350, 'guy', 'run-1.png')
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

        this.physics.add.existing(this.guy)   
        this.guy.body.setCollideWorldBounds(true) 
        this.physics.add.collider(this.guy, tileset)        
        
        this.camera = this.cameras.main.startFollow(this.guy, true)
        this.camera.setBounds(0, 0, 1984, 608)

    }

    update() {

        const body = this.guy.body

        if (this.cursors.up.isDown) {
            this.guy.y -= 10
            this.guy.anims.play('guy-jumping', true)
        } else if (this.cursors.right.isDown) {
            this.guy.x += 5
            this.guy.anims.play('guy-walking-right', true)
        } else if (this.cursors.left.isDown) {
            this.guy.x -= 5
            this.guy.anims.play('guy-walking-left', true)
        } else {
            this.guy.anims.play('guy-idle', true)
        }

    } 


}