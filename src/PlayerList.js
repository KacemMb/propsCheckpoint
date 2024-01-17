import React from 'react';
import Player from './Player';
import players from "./players.json" // get the data from the players.json to a variable "players"
// mapping the data and put the props for the childs components
let PlayerList = () => {
  return (
    <div className='playerCards'>
      {players.map((player, index) => (
        <Player 
          key={index}
          name={player.name}
          age={player.age}
          imageUrl={player.imageUrl}
          jerseyNumber={player.jerseyNumber}
          team={player.team}
          nationality={player.nationality}
        />
      ))}
    </div>
  );
};

export default PlayerList;
