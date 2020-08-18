import Phaser from 'phaser'
import Level1 from './scenes/Level1'
import React from 'react'
import { IonPhaser } from '@ion-phaser/react'

class Main extends React.Component {

  state = {
    initialize: true,
    game: {
      parent: 'game-container',
      width: 1984,
      height: 608,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 3000 }
        }
      },
      type: Phaser.AUTO,
      scene: [
        Level1
      ]
    }
  }
  

  render() {

    const { initialize, game } = this.state
    return (
      <IonPhaser game={game} initialize={initialize} />
    )
  }
  
}

export default Main