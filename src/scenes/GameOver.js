import React from 'react'
import {Link} from 'react-router-dom'

const GameOver = () => {
  return (
    <div className='start'>
        <h1>Game over!</h1>
      <Link to='/levelone' >
      {/* <img src={require("../fruit-trail.png")} alt='' className="fruit-trail"/> */}
        <img src={require("../start-game-button.png")} alt='' id="start-game-button"/>
      <h2 className="profile-headings">Level1</h2>
        Level 1
      </Link>
      <Link to='/leveltwo' >
        Level 2
      </Link>
      <Link to='/levelthree' >
        Level 3
      </Link>
      <Link to='/levelfour' >
        Level 4
      </Link>
    </div>
  )
}

export default GameOver