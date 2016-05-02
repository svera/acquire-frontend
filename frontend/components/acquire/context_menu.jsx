import React from 'react';
import FoundCorp from './context_menu/found_corp.jsx';


class ContextMenu extends React.Component {

  constructor(props) {
      super(props);
    }


  render() {
    switch (this.props.gameState) {
      case 'PlayTile':
        return (
          <div>
            <p>Click on a tile to play it</p>
          </div>
        );

      case 'FoundCorp':
        return (
          <FoundCorp corps={this.props.corps} conn={this.props.conn} />
        );
    }
    return null;
  }

}

export default ContextMenu;
