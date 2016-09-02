import React from 'react';

class PlayTile extends React.Component {

  render() {
      return (
        <p>{this.props.translator("game.play_tile")}</p>
      );
  }

}

export default PlayTile;
