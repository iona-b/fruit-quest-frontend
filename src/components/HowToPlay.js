import React from 'react';

const HowToPlay = () => {
    return (
        <div className="how-to-play">
            <h1 id="how-to-play-header">How to Play Fruit Quest</h1>
            <img src={require("../arrow-key.png")} alt='' id="arrow-keys"/>
            <p id="how-to-play-text">The aim of the game is to collect as many pieces of fruit as you can before the timer runs out. Use the left and right arrow keys to move your character through the level. The up key allows you to jump or fly, which will help you to collect those hard-to-reach pieces. Play again to see if you can beat your high score, or even make it to the top of the leader board!</p>
            <p id="how-to-play-text">Movement: Use the arrow keys on your keyboard to move. Left arrow key moves character left. Right arrow key moves character right. Up arrow key or spacebar makes the character jump. Hit the up arrow key or spacebar twice to double jump.</p>
        </div>
    )
}

export default HowToPlay;