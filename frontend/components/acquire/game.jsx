import React from 'react';
import Board from './board.jsx';
import Infobox from './infobox.jsx';
import PlayerInfobox from './player_infobox.jsx';
import RivalsInfobox from './rivals_infobox.jsx';
import ContextMenu from './context_menu.jsx';
import GameFinished from './game_finished.jsx'
import GameLeave from '../common/game_leave.jsx';
import GameDestroy from '../common/game_destroy.jsx';


class Game extends React.Component {

  render() {
    console.log(this.props.status.sta);
    switch (this.props.status.sta) {
      case 'EndGame':
        return (
          <GameFinished playerInfo={this.props.status.ply} rivalsInfo={this.props.status.riv} conn={this.props.conn}/>
        );
        break;

      case 'InsufficientPlayers':
        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <p>Not enough players to keep playing</p>
                <GameDestroy conn={this.props.conn} term="Back"/>
              </div>
            </div>
          </div>
        );
        break;

      default:
        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <PlayerInfobox playerInfo={this.props.status.ply} corps={this.props.status.cor} />
                <Board width="576" height="432" spacing="5" originX="0" originY="0" radius="3" board={this.props.status.brd} hand={this.props.status.hnd} conn={this.props.conn} />
                <ContextMenu conn={this.props.conn} corps={this.props.status.cor} tiedCorps={this.props.status.tie} gameState={this.props.status.sta} playerInfo={this.props.status.ply} />
                <GameLeave conn={this.props.conn} />
                <GameDestroy conn={this.props.conn} term="Terminate game"/>
              </div>
              <div className="col-md-4 col-md-offset-1">
                <Infobox corps={this.props.status.cor} />
                <RivalsInfobox corps={this.props.status.cor} rivalsInfo={this.props.status.riv} />
              </div>
            </div>
          </div>
        );
    }
  }

}

export default Game;
