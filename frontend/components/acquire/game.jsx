import React from 'react';
import Board from './board.jsx';
import Infobox from './infobox.jsx';
import PlayerInfobox from './player_infobox.jsx';
import RivalsInfobox from './rivals_infobox.jsx';
import ContextMenu from './context_menu.jsx';
import GameFinished from './game_finished.jsx'
import History from './history.jsx'
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
                <p>{this.props.translator("insufficient_players")}</p>
                <GameDestroy conn={this.props.conn} text={this.props.translator("back")} />
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
                <PlayerInfobox playerInfo={this.props.status.ply} corps={this.props.status.cor} translator={this.props.translator} />
                <Board width="576" height="432" spacing="5" originX="0" originY="0" radius="3" board={this.props.status.brd} hand={this.props.status.hnd} conn={this.props.conn} />
                <ContextMenu conn={this.props.conn} corps={this.props.status.cor} tiedCorps={this.props.status.tie} gameState={this.props.status.sta} playerInfo={this.props.status.ply} translator={this.props.translator} />
                <GameLeave conn={this.props.conn} text={this.props.translator("game.leave")}/>
                <GameDestroy conn={this.props.conn} text={this.props.translator("game.terminate")} />
              </div>
              <div className="col-md-4 col-md-offset-1">
                <Infobox corps={this.props.status.cor} translator={this.props.translator} />
                <RivalsInfobox corps={this.props.status.cor} rivalsInfo={this.props.status.riv} translator={this.props.translator} />
                <History log={this.props.status.his} translator={this.props.translator} />
              </div>
            </div>
          </div>
        );
    }
  }

}

export default Game;
