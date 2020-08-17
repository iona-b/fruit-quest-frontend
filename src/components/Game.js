import React, { Component } from "react";
import Main from '../main.js';
import Level1 from '../scenes/Level1.js';
import Phaser from 'phaser';

class Game extends Component {

    // state = {
    //     game: {
    //     type: Phaser.AUTO,
    //     width: 992,
    //     height: 608,
    //     physics: {
    //         default: 'arcade',
    //         arcade: {
    //             gravity: { y: 4000 }
    //         }
    //     },
    //     scene: [Level1],

    //     },
    //     show: true,
    //     parent: 'game'
    // }

    // callTheGame = () => {
    //     if (this.state.show === true) {
    //         const { config } = this.state.game;
    //         const game = new Phaser.Game(config);
    //         return game;
    //     }
    // }

    // removeCanvas = () => {
    //     let canvas = document.querySelector('canvas')
    //     canvas.remove()
    // }

    // componentDidMount() {
    //     const config: GameConfig = {
    //         type: Phaser.AUTO,
    //         width: 992,
    //         height: 608,
    //         physics: {
    //             default: 'arcade',
    //             arcade: {
    //                 gravity: { y: 4000 }
    //             }
    //         },
    //         scene: [Level1],
    //     }
    //     new Phaser.Game(config)
    // }

    render(){
        // this.removeCanvas()
        return (
            <div id="game">
                {/* {Level1} */}
                {/* {this.callTheGame()} */}
            </div>
        )
    }
}

export default Game;