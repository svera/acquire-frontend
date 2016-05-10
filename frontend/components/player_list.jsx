import React from 'react';
import KickPlayer from './kick_player.jsx';

class PlayerList extends React.Component {

  render() {
    var self = this;
    return (
        <ul>
          {
            this.props.players.map(function(player, playerNumber) {
                return (
                  <li key={player}>
                    {player}&nbsp;
                    <KickPlayer conn={self.props.conn} playerNumber={playerNumber} />
                  </li>
                )
            })
          }
        </ul>
    );
  }

}

export default PlayerList;
