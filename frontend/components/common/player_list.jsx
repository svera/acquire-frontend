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
            this.props.players.map(function(player, playerNumber) {
                return (
                  <ListGroupItem key={playerNumber}>
                    {player}&nbsp;
                    <KickPlayer conn={self.props.conn} playerNumber={playerNumber} text={self.props.translator('remove')}/>
                  </ListGroupItem>
                )
            })
          }
        </ListGroup>
    );
  }

}

export default PlayerList;
