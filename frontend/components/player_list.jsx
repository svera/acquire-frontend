import React from 'react';

class PlayerList extends React.Component {

  render() {
    return (
        <ul>
          {
            this.props.players.map(function(player) {
                return <li key={player}>{player}</li>
            })
          }
        </ul>
    );
  }

}

export default PlayerList;
