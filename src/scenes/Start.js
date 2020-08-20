import React from 'react'
import {Link, withRouter} from 'react-router-dom'

class StartScene extends React.Component {

  render() {
      return (
        <div className='start'>
          <img src={require("../fruit-trail.png")} alt='' className="fruit-trail"/>
          <Link to='/play' >
            <img src={require("../start-game-button.png")} alt='' id="start-game-button"/>
          </Link>
        </div>
      )
    }

}

export default withRouter(StartScene)