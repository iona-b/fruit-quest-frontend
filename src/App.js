<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
=======
import React from 'react';
import {withRouter} from 'react-router-dom'
>>>>>>> master
import './App.css';
import NavBar from './containers/NavBar.js';
import GameAreaContainer from './containers/GameAreaContainer.js';

<<<<<<< HEAD

function App() {
  const [topTen, setTopTen] = useState([])

  const fetchScores = async () => {
    let res = await fetch('http://localhost:3000/users')
    let json = await res.json()
    let userTotals = json.map(user=> {
      let userScores = user.scores.map(eachScore => eachScore.score)
      let total = userScores.reduce((a, b) => {
        return  a + b
      }, 0)
      return {name: user.username, total: total}
    })
    const sortedTotals = userTotals.sort((a, b) => {return b.total - a.total})
    setTopTen(sortedTotals.slice(0, 10))
  }

  useEffect(() => {
    fetchScores()
  }, [])

  return (
    <div>
      <NavBar />
      <GameAreaContainer topTen={topTen} />
    </div>
  );
}

export default App;
=======
class App extends React.Component {

  state={
    user:{
      id: 0,
      username: "",
    }
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
     }else {
       alert(json.error)
     }
   })
   .catch(err => console.log(err))
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
      }else {
        alert(json.error)
      }
    })
    .catch(err => console.log(err))
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

  render () {

    return (
      <div>
        <NavBar handleLogin={this.handleLogin} handleSignUp={this.handleSignUp} user={this.state.user} deleteProfile={this.deleteProfile} handleLogOut={this.handleLogOut}/>
        <GameAreaContainer />
      </div>
    );

  }

}

export default withRouter(App)
>>>>>>> master
