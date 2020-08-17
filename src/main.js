import Phaser from 'phaser'
import Level1 from './scenes/Level1'

// export default new Phaser.Game({
// 	type: Phaser.AUTO,
// 	width: 992,
// 	height: 608,
// 	physics: {
// 		default: 'arcade',
// 		arcade: {
// 			gravity: { y: 4000 }
// 		}
// 	},
//     scene: [Level1],
//     parent: 'game'
// })

import React from 'react'
import { IonPhaser } from '@ion-phaser/react'

class Test extends React.Component {
  state = {
    initialize: true,
    game: {
      // LevelOneTest
      width: 992,
      height: 608,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 4000 }
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

export default Test