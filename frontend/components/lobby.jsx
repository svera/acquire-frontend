import React from 'react';
import PlayerList from './player_list.jsx';
import AddBot from './add_bot.jsx';
import StartGame from './start_game.jsx';
import GameDestroy from './game_destroy.jsx';

class Lobby extends React.Component {

  constructor(props) {
      super(props);
      this.conn = null
      this.state = {
        players: []
      };

      this.conn = new WebSocket('ws://localhost:8001/' + this.props.gameID + '/join');

      this.conn.onmessage = (e) => {
        this.parseMessage(e.data);
      }
      this.conn.onerror = (e) => {
        this.props.gameJoinErrorCallback();
      }
      this.conn.onclose = (e) => {
        var message = null;
        switch (e.code) {
          case 4000:
            message = 'Game terminated by owner';
            break;
          case 4001:
            message = 'You have exited from game';
            break;
          case 4002:
            message = 'You have been kicked out from game';
            break;
          default:
            message = 'Connection to server lost';
        }
        sessionStorage.setItem('info', message);
        this.props.connectionLostCallBack();
      }
  }


  parseMessage(data) {
    var msg = JSON.parse(data);
    switch (msg.typ) {
      case "err":
        console.log(msg.cnt);
        break;
      case "pls":
        this.setState({
          players: msg.val
        })
        break;
      case "ctl":
        sessionStorage.setItem('role', msg.rol);
        break;
      case "upd":
        this.props.startGameCallback(this.conn, msg);
        break;
    }
  }

  render() {
    if (sessionStorage.getItem('role') == 'mng') {
      var restrictedItems = (
        <div>
          <AddBot conn={this.conn} />
          <StartGame conn={this.conn} />
          <GameDestroy conn={this.conn} />
        </div>
      );
    }
    return (
      <div>
        <h2>Lobby for game {this.props.gameID}</h2>
        <p>Connected players</p>
        <PlayerList players={this.state.players} conn={this.conn} />
        {restrictedItems}
      </div>
    );
  }

}

export default Lobby;
