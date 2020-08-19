import React from 'react'
import {Route, Switch, Link,withRouter} from 'react-router-dom'
import Main from '../main.js';

const StartScene = () => {

  return (
    <div className='start'>
      <Link to='/play'>Start Game!</Link>
      <Link to='/levelone'>Level One</Link>
      <Link to='/leveltwo'>Level Two</Link>
      <Link to='/levelthree'>Level Three</Link>
      <Link to='/levelfour'>Level Four</Link>
    </div>
  )

}

export default StartScene