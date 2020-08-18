import React from 'react'
import {Route, Switch, Link,withRouter} from 'react-router-dom'
import Main from '../main.js';

const StartScene = () => {

  return (
    <div className='start'>
      <Link to='/play'>Start Game!</Link>
    </div>
  )

}

export default StartScene