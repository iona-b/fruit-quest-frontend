import React from 'react';
import Start from '../scenes/Start.js';
import Game from '../main.js';
import Login from '../components/Login.js';
import HowToPlay from '../components/HowToPlay.js';
import Profile from '../components/PlayerProfileCard.js';
import NotFound from '../components/NotFound.js';
import {Route, Switch, Link, NavLink, withRouter} from 'react-router-dom'


const NavBar = () =>  {

  return (
    <div className="navbar">
      <header>
      <img src={require("../fruit-quest.png")} alt='AHHH' id="logo"/>
         <li>
           <NavLink to='/' exact className="login-button">Login</NavLink>
         </li>
         <li>
           <NavLink to='/start'>Play</NavLink>
         </li>
         <li>
           <NavLink to='/howtoplay'>How to Play</NavLink>
         </li>
         <li>
           <NavLink to='/profile'>Profile</NavLink>
         </li>
         <li>
           <NavLink to='/logout'>Logout</NavLink>
         </li>
      </header>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/start' component={Game}/>
        <Route path='/play' component={Game}/>
        <Route path='/howtoplay' component={HowToPlay}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/logout' exact component={null}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default withRouter(NavBar);
 