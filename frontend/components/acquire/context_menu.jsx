import React from 'react';
import FoundCorp from './context_menu/found_corp.jsx';
import BuyStock from './context_menu/buy_stock.jsx';
import SellTrade from './context_menu/sell_trade.jsx';


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

      case 'BuyStock':
        return (
          <BuyStock corps={this.props.corps} conn={this.props.conn} />
        );

      case 'SellTrade':
        return (
          <SellTrade corps={this.props.corps} conn={this.props.conn} />
        );
    }
    return null;
  }

}

export default ContextMenu;
