import React from 'react';
import Board from './board.jsx';
import Infobox from './infobox.jsx';
import ContextMenu from './context_menu.jsx';

class Game extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        board: props.status.brd,
        gameState: props.status.sta,
        corps: props.status.cor,
        tiedCorps: props.status.tie,
        hand: props.status.hnd
      };
    }

  componentDidMount() {
    this.props.conn.onmessage = (e) => {
      this.parseMessage(e.data);
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
          gameState: msg.sta
        })
        break;
    }
  }

  render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <Board cellSize="48" originX="0" originY="0" board={this.state.board} hand={this.state.hand} conn={this.props.conn} />
              <ContextMenu conn={this.props.conn} corps={this.state.corps} tiedCorps={this.state.tiedCorps} gameState={this.state.gameState}/>
            </div>
            <div className="col-md-4 col-md-offset-1">
              <Infobox corps={this.state.corps} />
            </div>
          </div>
        </div>

      );
  }

}

export default Game;
