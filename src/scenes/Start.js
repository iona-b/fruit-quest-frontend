import React from 'react'
import {Link} from 'react-router-dom'

const StartScene = () => {
  return (
    <div className='start'>
      <Link to='/play' >
        <img src={require("../start-game-button.png")} alt='' id="start-game-button"/>
      </Link>
    </div>
  )
}

export default StartScene