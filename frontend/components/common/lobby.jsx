import React from 'react';
import PlayerList from './player_list.jsx';
import AddBot from './add_bot.jsx';
import StartGame from './start_game.jsx';
import GameDestroy from './game_destroy.jsx';

class Lobby extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        players: []
      };
  }

  render() {
    if (sessionStorage.getItem('role') == 'mng') {
      var restrictedItems = (
        <div>
          <AddBot conn={this.props.conn} text={this.props.translator('lobby.add_bot')} />
          <StartGame conn={this.props.conn} text={this.props.translator('lobby.start_game')} />
          <GameDestroy conn={this.props.conn} text={this.props.translator('cancel')} />
        </div>
      );
    }
    return (
      <div>
        <h2>{this.props.translator('lobby.title', {'gameID': this.props.gameID})}</h2>
        <h3>{this.props.translator('lobby.connected_players')}</h3>
        <PlayerList players={this.props.players} conn={this.props.conn} translator={this.props.translator} />
        {restrictedItems}
      </div>
    );
  }

}

export default Lobby;
