import React from 'react'
import {Route, Switch, Link,withRouter} from 'react-router-dom'
import Main from '../main.js';

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