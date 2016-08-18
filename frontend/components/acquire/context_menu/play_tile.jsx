import React from 'react';
import ContextMenuHeader from './context_menu_header.jsx';

class PlayTile extends React.Component {

  render() {
      return (
        <ContextMenuHeader conn={this.props.conn} translator={this.props.translator} text="game.play_tile" />
      );
  }

}

export default PlayTile;
