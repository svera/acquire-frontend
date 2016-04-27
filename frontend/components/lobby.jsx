import React from 'react';
import PlayerList from './player_list.jsx';

class Lobby extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        players: []
      };
  }

  componentDidMount() {
    var conn = new WebSocket('ws://localhost:8001/' + this.props.gameID + '/join');
    var self = this
    conn.onmessage = function(e) {
      self.parseMessage(e.data);
    }
  }

  parseMessage(data) {
    var msg = JSON.parse(data);
    switch (msg.typ) {
      case "add":
        this.setState({
          players: msg.val
        })
    }
  }

  render() {
    return (
      <div>
        <p>Lobby for game {this.props.gameID}</p>
        <p>Connected players</p>
        <PlayerList players={this.state.players} />
      </div>
    );
  }

}

export default Lobby;
