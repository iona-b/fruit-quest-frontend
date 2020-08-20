import React from 'react';
import Start from '../scenes/Start';
import Level1 from '../scenes/Level1';
// import Level2 from '../scenes/Level2';
import Level3 from '../scenes/Level3';
import Level4 from '../scenes/Level4';
import Login from '../components/Login';
import HowToPlay from '../components/HowToPlay';
import Profile from '../containers/ProfileContainer';
import NotFound from '../components/NotFound';
import {Route, Switch, Link, NavLink, withRouter} from 'react-router-dom'


const NavBar = () =>  {

  return (
    <div className="navbar">
      <img src={require("../fruit-quest-logo.png")} alt='' id="logo"/>
         <div className="navbar-divs">
          <Link to='/' >
            <img src={require("../cherry-button.png")} alt='' className="navbar-buttons" id="login-button"/>
          </Link>
          <NavLink to='/' exact className="navbar-links" id="login-link">Login</NavLink>
         </div>
         <div className="navbar-divs">
          <Link to='/start' >
            <img src={require("../pineapple-button.png")} alt='' className="navbar-buttons" id="play-button"/>
          </Link>
           <NavLink to='/start' className="navbar-links">Play</NavLink>
         </div>
          <div className="navbar-divs">
            <Link to='/howtoplay' >
              <img src={require("../raspberry-button.png")} alt='' className="navbar-buttons" id="how-to-play-button"/>
            </Link>
            <NavLink to='/howtoplay' className="navbar-links">How to Play</NavLink>
         </div>
         <div className="navbar-divs">
          <Link to='/profile' >
            <img src={require("../blueberry-button.png")} alt='' className="navbar-buttons" id="profile-button"/>
          </Link>
            <NavLink to='/profile' className="navbar-links">Profile</NavLink>
         </div>
         <div className="navbar-divs">
         <Link to='/logout' >
          <img src={require("../apple-button.png")} alt='' className="navbar-buttons" id="logout-button"/>
        </Link>
           <NavLink to='/logout' className="navbar-links">Logout</NavLink>
         </div>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/start' component={Start}/>
        <Route path='/levelone' component={Level1}/> 
        {/* <Route path='/leveltwo' component={Level2}/>  */}
        <Route path='/levelthree' component={Level3}/> 
        <Route path='/levelfour' component={Level4}/> 
        <Route path='/howtoplay' component={HowToPlay}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/logout' exact component={null}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default withRouter(NavBar);
 