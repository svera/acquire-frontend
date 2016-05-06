import React from 'react';
import ClaimEnd from './claim_end.jsx';

class PlayTile extends React.Component {

  render() {
      return (
        <div>
          <p>Click on a tile to play it</p>
          <ClaimEnd conn={this.props.conn} />
        </div>
      );
  }

}

export default PlayTile;
