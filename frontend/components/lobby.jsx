import React from 'react';
import PlayerList from './player_list.jsx';
import AddBot from './add_bot.jsx';
import StartGame from './start_game.jsx';

class Lobby extends React.Component {

  constructor(props) {
      super(props);
      this.conn = null
      this.state = {
        players: []
      };
  }

  componentWillMount() {
    this.conn = new WebSocket('ws://localhost:8001/' + this.props.gameID + '/join');

    this.conn.onmessage = (e) => {
      this.parseMessage(e.data);
    }
    this.conn.onerror = (e) => {
      this.props.gameJoinErrorCallback();
    }
  }

  parseMessage(data) {
    var msg = JSON.parse(data);
    switch (msg.typ) {
      case "err":
        console.log(msg.cnt);
        break;
      case "add":
        this.setState({
          players: msg.val
        })
        break;
      case "upd":
        console.log(msg);
        this.props.startGameCallback(this.conn, msg);
        break;
    }
  }

  render() {
    return (
      <div>
        <h2>Lobby for game {this.props.gameID}</h2>
        <p>Connected players</p>
        <PlayerList players={this.state.players} />
        <AddBot conn={this.conn} />
        <StartGame conn={this.conn} />
      </div>
    );
  }

}

export default Lobby;
