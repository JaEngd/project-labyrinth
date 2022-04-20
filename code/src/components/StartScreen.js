import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import games from '../reducers/games';

const StartScreen = () => {
    const [inputValue, setInputValue] = useState(''); //Property + handler to update property

    const dispatch = useDispatch();

    const onUserSet = () => {
        dispatch(games.actions.setUsername(inputValue));
        fetch('https://labyrinth-technigo.herokuapp.com/start', {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(inputValue)
        })
            .then(res => res.json())
            .then(game => dispatch(games.actions.setGame(game)));
    }

  return (
      <div>
          <p>The Labyrith game</p>
          <input
          type="text"
          value={inputValue}
          placeholder="Type in username"
          onChange={e => setInputValue(e.target.value)}
          />
            <button onClick={onUserSet}>Start Game</button>
    </div>  
  )
};

export default StartScreen;