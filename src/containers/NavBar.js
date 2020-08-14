import React from 'react';
import Home from '../components/Home.js';
import Login from '../components/Login.js';
import HowToPlay from '../components/HowToPlay.js';
import Profile from '../components/PlayerProfileCard.js';
import NotFound from '../components/NotFound.js';
import {Route, Switch, Link, NavLink, withRouter} from 'react-router-dom'


const NavBar = () =>  {

  return (
    <div className="navbar">
      <header>
      <h1>NavBar Container</h1>
       <ul>
         <li>
           <NavLink to='/' exact>Login</NavLink>
         </li>
         <li>
           <NavLink to='/home'>Play</NavLink>
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
       </ul>
      </header>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/home' component={Home}/>
        <Route path='/howtoplay' component={HowToPlay}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/logout' exact component={null}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default withRouter(NavBar);
 