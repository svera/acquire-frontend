import React from 'react';
import KickPlayer from './kick_player.jsx';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

class PlayerList extends React.Component {

  render() {
    var self = this;
    return (
        <ListGroup>
          {
            Object.keys(this.props.players).map(function(playerNumber, index) {
                // Client must not be shown in lobby's player list
                var player = self.props.players[playerNumber]
                if (playerNumber == sessionStorage.getItem('clientNumber')) {
                  return;
                }
                return (
                  <ListGroupItem key={playerNumber}>
                    {player.nam}
                    <KickPlayer conn={self.props.conn} playerNumber={playerNumber} text={self.props.translator('remove')}/>
                  </ListGroupItem>
                );
            })
          }
        </ListGroup>
    );
  }

}

export default PlayerList;
