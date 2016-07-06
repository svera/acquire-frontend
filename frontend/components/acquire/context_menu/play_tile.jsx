import React from 'react';
import ClaimEnd from './claim_end.jsx';

class PlayTile extends React.Component {

  render() {
      return (
        <div>
          <p>{this.props.translator("game.play_tile")}</p>
          <ClaimEnd conn={this.props.conn} translator={this.props.translator} />
        </div>
      );
  }

}

export default PlayTile;
