import React from 'react';
import Board from './board.jsx';
import Infobox from './infobox.jsx';
import PlayerInfobox from './player_infobox.jsx';
import ContextMenu from './context_menu.jsx';
import GameFinished from './game_finished.jsx'

class Game extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        board: props.status.brd,
        gameState: props.status.sta,
        corps: props.status.cor,
        tiedCorps: props.status.tie,
        hand: props.status.hnd,
        playerInfo: props.status.ply,
        rivalsInfo: props.status.riv,
        turnNumber: props.status.trn,
        lastTurn: props.status.lst
      };

      this.props.conn.onmessage = (e) => {
        this.parseMessage(e.data);
      }
      this.props.conn.onclose = (e) => {
        sessionStorage.setItem('info', 'Connection to server lost');
        this.props.connectionLostCallBack();
      }

  }

  parseMessage(data) {
    var msg = JSON.parse(data);
    switch (msg.typ) {
      case "err":
        console.log(msg.cnt);
        break;
      case "upd":
        this.setState({
          board: msg.brd,
          hand: msg.hnd,
          corps: msg.cor,
          tiedCorps: msg.tie,
          gameState: msg.sta,
          playerInfo: msg.ply,
          rivalsInfo: msg.riv,
          turnNumber: msg.trn,
          lastTurn: msg.lst
        })
        break;
    }
  }

  render() {
    switch (this.state.gameState) {
      case 'EndGame':
        return (
          <GameFinished playerInfo={this.state.playerInfo} rivalsInfo={this.state.rivalsInfo} />
        );

      default:
        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <Board cellSize="48" originX="0" originY="0" board={this.state.board} hand={this.state.hand} conn={this.props.conn} />
                <ContextMenu conn={this.props.conn} corps={this.state.corps} tiedCorps={this.state.tiedCorps} gameState={this.state.gameState} playerInfo={this.state.playerInfo} />
              </div>
              <div className="col-md-4 col-md-offset-1">
                <Infobox corps={this.state.corps} />
                <PlayerInfobox playerInfo={this.state.playerInfo} />
              </div>
            </div>
          </div>
        );
    }
  }

}

export default Game;
