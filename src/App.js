import React from 'react';
import {withRouter} from 'react-router-dom'
import './App.css';
import NavBar from './containers/NavBar.js';
import GameAreaContainer from './containers/GameAreaContainer.js';

class App extends React.Component {

  state={
    user:{
      id: 0,
      username: "",
    },
    topTen: []
  }

  fetchScores = async () => {
    try {
      let res = await fetch('http://localhost:3000/users')
      let json = await res.json()
      this.setState({
        allUsers: json
      })
      console.log(json)
      let userTotals = json.map(user=> {
        let userScores = user.scores.map(eachScore => eachScore.score)
        let total = userScores.reduce((a, b) => {
          return  a + b
        }, 0)
        return {name: user.username, total: total}
      })
      const sortedTotals = userTotals.sort((a, b) => {return b.total - a.total})
      this.setState({
        topTen: sortedTotals.slice(0, 10)
      })
    } catch(err) {
      console.log('App.js Fetch Users Error:', err)
    }
  }

  componentDidMount() {
    this.fetchScores()
  }

  handleLogin = (event, userDetails) => {
    event.preventDefault()

    fetch('http://localhost:3000/login',{
     method:"POST",
     headers:{
       'Content-Type':'application/json'
     },
     body:JSON.stringify(userDetails)
   })
   .then(res => res.json())
   .then(json => {
     if(!json.error){
       this.setState({user:{id:json.id, username:json.username}}, () => {
         this.props.history.push('/start')
       })
       localStorage.setItem('user_id', json.id);
     } else {
       alert(json.error)
     }
   })
   .catch(err => console.log('App.js Login Error:', err))
  }
 
  handleSignUp = (event, userDetails) => {
   event.preventDefault()

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(userDetails)
    })
    .then(res => res.json())
    .then(json => {
      if(!json.error){
        this.setState({user:{id:json.id, username:json.username}}, () => {
          this.props.history.push('/start')
        })
        localStorage.setItem('user_id', json.id);
      } else {
        alert(json.error)
      }
    })
    .catch(err => console.log('App.js Sign Up Error:', err))
  }

  deleteProfile = () => {
    fetch(`http://localhost:3000/users/${this.state.user.id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(json => {
        let updatedUser =
          {user: {
            id:0,
            username:''
          }}
        this.setState ({
          user: updatedUser
        })
        this.props.history.push('/')
      })
  }

  handleLogOut = () => {
    let updatedUser ={
      id: 0,
      username: ""
    }
    this.setState ({
      user: updatedUser
    })
  }

  reloadBoard = () => {
    this.fetchScores()
  }

  render () {
    return (
      <div>
        <NavBar handleLogin={this.handleLogin} handleSignUp={this.handleSignUp} user={this.state.user} deleteProfile={this.deleteProfile} handleLogOut={this.handleLogOut} reloadBoard={this.reloadBoard}/>
        <GameAreaContainer topTen={this.state.topTen}/>
      </div>
    );
  }
}

export default withRouter(App)
