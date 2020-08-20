import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './containers/NavBar.js';
import GameAreaContainer from './containers/GameAreaContainer.js';


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