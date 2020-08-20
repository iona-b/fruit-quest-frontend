import React from 'react';

const HowToPlay = () => {
    return (
        <div className="how-to-play">
            <h1>How to Play Fruit Quest</h1>
            <img src={require("../arrow-key.png")} alt='' id="arrow-keys"/>
            <p>Objective: Collect as many fruit as you can until the timer runs out! Try to make it onto the top ten leader board! </p>
            <p>Movement: Use the arrow keys on your keyboard to move. Left arrow key moves character left. Right arrow key moves character right. Up arrow key or spacebar makes the character jump. Hit the up arrow key or spacebar twice to double jump.</p>
        </div>
    )
}

export default HowToPlay;