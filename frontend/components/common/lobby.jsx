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
          <AddBot conn={this.props.conn} />
          <StartGame conn={this.props.conn} />
          <GameDestroy conn={this.props.conn} term="Cancel"/>
        </div>
      );
    }
    return (
      <div>
        <h2>Lobby for game {this.props.gameID}</h2>
        <p>Connected players</p>
        <PlayerList players={this.props.players} conn={this.props.conn} />
        {restrictedItems}
      </div>
    );
  }

}

export default Lobby;
