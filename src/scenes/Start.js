import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const StartScene = () => {
  return (
    <div className='start'>
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

export default withRouter(StartScene)