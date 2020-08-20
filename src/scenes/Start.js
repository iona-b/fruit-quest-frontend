import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const StartScene = () => {
  return (
    <div className="start-section">
      <h2 id="start-section-heading">Select a Level!</h2>
      <div id="level-divs">
        <div className="game-play-divs">
          <Link to='/levelone' >
            <img src={require("../level-1.png")} alt='' className="game-play-logos"/>
          </Link>
          <Link to='/levelone' className="level-headings">Level 1</Link>
        </div>
        <div className="game-play-divs">
          <Link to='/leveltwo' >
            <img src={require("../level-2.png")} alt='' className="game-play-logos"/>
          </Link>
          <Link to='/leveltwo' className="level-headings">Level 2</Link>
        </div>
        <div className="game-play-divs">
          <Link to='/levelthree' >
            <img src={require("../level-3.png")} alt='' className="game-play-logos"/>
          </Link>
          <Link to='/levelthree' className="level-headings">Level 3</Link>
        </div>
        <div className="game-play-divs">
          <Link to='/levelfour' >
            <img src={require("../level-4.png")} alt='' className="game-play-logos"/>
          </Link>
          <Link to='/levelfour' className="level-headings">Level 4</Link>
        </div>
      </div>
    </div>
  )
}

export default withRouter(StartScene)