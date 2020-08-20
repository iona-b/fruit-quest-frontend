import React from 'react';

const HowToPlay = () => {
    return (
        <div className="how-to-play">
            <h1 id="how-to-play-header">How to Play Fruit Quest</h1>
            <p id="how-to-play-text">The aim of the game is to collect as many pieces of fruit as you can before the timer runs out.</p>
            <img src={require("../arrow-key.png")} alt='' id="arrow-keys"/>
            <p id="how-to-play-text">Use the left and right arrow keys to move your character through the level. The up key or space bar allows you to jump, and hitting it twice will give you a double jump, which will help you to collect those hard-to-reach pieces. Play again to see if you can beat your high score, or even make it to the top of the leader board!</p>
            
        </div>
    )
}

export default HowToPlay;