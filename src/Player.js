import React from 'react';

function Player(props) {
  return (
    <div className="playerCard">
      <div className="playerCardHeader">
        <h1>{props.name}</h1>{/* the name of the player*/}
        <h2> Age: {props.age}</h2>{/* the age of the player*/}
      </div>
      <div className="playerCardMain">
        <img src={props.imageUrl} alt={props.name} className='cardImage'/>{/* the image of the player*/}
      </div>
      <div className="playerCardFooter">
        <h1>Jersey Number: {props.jerseyNumber}</h1>{/* the number of the player*/}
        <h2>Team: {props.team}</h2>{/* the team of the player*/}
        <h2>Nationality: {props.nationality}</h2>{/* the nationality of the player*/}
      </div>
    </div>
    
  );
}
// add the default props
Player.defaultProps = {
  name: 'Player Name',
  age: 'N/A',
  imageUrl: 'default-image-url.jpg',
  jerseyNumber: 'N/A',
  team: 'N/A',
  nationality: 'N/A',
};

export default Player;