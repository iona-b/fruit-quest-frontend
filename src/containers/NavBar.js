import React from 'react';
import Start from '../scenes/Start';
// import Level1 from '../scenes/Level1';
import Level2 from '../scenes/Level2';
import Level3 from '../scenes/Level3';
import Level4 from '../scenes/Level4';
import Game from '../main.js';
import Home from '../components/Home';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import HowToPlay from '../components/HowToPlay';
import Profile from '../containers/ProfileContainer';
import NotFound from '../components/NotFound';
import {Route, Switch, Link, NavLink, withRouter} from 'react-router-dom'


class NavBar extends React.Component {

  renderLogin = () => <Login handleLogin={this.props.handleLogin}/>
  renderSignUp = () => <SignUp handleSignUp={this.props.handleSignUp}/>
  renderProfile = () => <Profile deleteProfile={this.props.deleteProfile} user={this.props.user}/>
  renderHome = () => <Home user={this.props.user}/>

  render(){
    return (
      <div className="navbar">
        <Link to='/' >
          <img src={require("../fruit-quest-logo.png")} alt='' id="logo"/>
        </Link>
        {this.props.user.id !== 0 ? (
          <div className="navbar-divs">
            <Link to='/' >
              <img src={require("../cherry-button.png")} alt='' className="navbar-buttons" id="home-button"/>
            </Link>
            <NavLink to='/' exact className="navbar-links" id="home-link" >Home</NavLink>
          </div>
          ) : null }
          {this.props.user.id !== 0 ? (
          <div className="navbar-divs">
            <Link to='/start' >
              <img src={require("../pineapple-button.png")} alt='' className="navbar-buttons" id="play-button"/>
            </Link>
            <NavLink to='/start' className="navbar-links">Play</NavLink>
          </div>
          ) : null }
          {this.props.user.id !== 0 ? (
            <div className="navbar-divs">
              <Link to='/howtoplay' >
                <img src={require("../raspberry-button.png")} alt='' className="navbar-buttons" id="how-to-play-button"/>
              </Link>
              <NavLink to='/howtoplay' className="navbar-links">How to Play</NavLink>
          </div>
          ) : null }
          {this.props.user.id !== 0 ? (
          <div className="navbar-divs">
            <Link to='/profile' >
              <img src={require("../blueberry-button.png")} alt='' className="navbar-buttons" id="profile-button"/>
            </Link>
              <NavLink to='/profile' className="navbar-links">Profile</NavLink>
          </div>
          ) : null }
          {this.props.user.id !== 0 ? (
            <div className="navbar-divs">
              <Link to='/' >
                <img src={require("../apple-button.png")} alt='' className="navbar-buttons" id="logout-button" onClick={this.props.handleLogOut}/>
              </Link>
                <NavLink to='/' className="navbar-links" onClick={this.props.handleLogOut}>Logout</NavLink>
            </div>
          ) : null }

        <Switch>
          <Route exact path='/' component={this.renderHome} />
          <Route path='/login' component={this.renderLogin}/>
          <Route path='/signup' component={this.renderSignUp}/>
          <Route path='/start' component={Start}/>
          <Route path='/leveltwo' component={Level2}/>
          <Route path='/levelthree' component={Level3}/>
          <Route path='/levelfour' component={Level4}/>
          <Route path='/howtoplay' component={HowToPlay}/>
          <Route path='/profile' component={this.renderProfile}/>
          <Route path='/logout' exact component={null}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(NavBar);
 