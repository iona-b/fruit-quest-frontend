import React from 'react';
import {Link, NavLink} from 'react-router-dom'

const Home = (props) => {
    return (
        <div>
            <div className="login-welcome">
                <img src={require("../welcome-to.png")} alt='' id="welcome-to"/>
            </div>
            {
            props.user.id === 0 ? (
                <div id ="login-signup-section">
                    <div className="login-signup-divs" id="login-div">
                        <NavLink to='/login' >
                            <img src={require("../high-score-logo.png")} alt='' className="login-signup-logos" id="login-logo"/>  
                        </NavLink>
                        <NavLink to='/login' className="login-signup-headings">Log In</NavLink> 
                    </div>
                    <div className="login-signup-divs" id="sign-up-div">
                        <NavLink to='/signup' >
                            <img src={require("../level-logo.png")} alt='' className="login-signup-logos" id="signup-logo"/>
                        </NavLink>
                        <NavLink to='/signup' className="login-signup-headings">Sign Up</NavLink>
                    </div>
                </div>
            ) : (
                <div id ="login-signup-section">
                    <div className='start'>
                        <Link to='/start' >
                            <img src={require("../start-game-button.png")} alt='' id="home-start-game-button"/>
                        </Link>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Home;