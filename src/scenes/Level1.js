import Phaser from 'phaser';

export default class Level1 extends Phaser.Scene {
    
    constructor(){
        super('game')
    }

    preload() {

        this.load.image('tiles', 'level-1-terrain.png')
        this.load.tilemapTiledJSON('map', 'level-1.json')
        this.load.atlas('pink man', 'jump.png', 'jump.json')

        this.cursors = this.input.keyboard.createCursorKeys()

    }

    create() {

        const map = this.make.tilemap({ key: 'map'})
        const terrain = map.addTilesetImage('terrain', 'tiles', 16, 16, 0, 0)
        const tileset = map.createStaticLayer('terrain', terrain)
        tileset.setCollisionByProperty({collides : true})
        this.pinkMan = this.add.sprite(20, 350, 'pink man', 'Jump (32x32).png')
        // this.scene.start('game')

        // const debugGraphics = this.add.graphics().setAlpha(0.75);
        // tileset.renderDebug(debugGraphics, {
        //     tileColor: null,
        //     collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
        //     faceColor: new Phaser.Display.Color(40, 39, 37, 255)
        // })

        this.physics.add.existing(this.pinkMan)   
        this.pinkMan.body.setCollideWorldBounds(true, 1, 1) 
        this.physics.add.collider(this.pinkMan, tileset)
    }

    update() {
        if (this.cursors.up.isDown) {
            this.pinkMan.y -= 10
        } else if (this.cursors.down.isDown) {
            this.pinkMan.y += 10
        } else if (this.cursors.right.isDown) {
            this.pinkMan.x += 5
        } else if (this.cursors.left.isDown) {
            this.pinkMan.x -= 5
        }
    } 


}