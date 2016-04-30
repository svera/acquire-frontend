import React from 'react';
import Board from './board.jsx';
import Infobox from './infobox.jsx';

class Game extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        board: props.status.brd,
        state: props.status.sta,
        corps: props.status.cor,
        hand: props.status.hnd
      };
    }

  componentWillMount() {
    this.props.conn.onmessage = (e) => {
      console.log(e.data);
    }
  }

  render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <Board cellSize="48" originX="0" originY="0" hand={this.state.hand} />
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
