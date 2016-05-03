import React from 'react';
import FoundCorp from './context_menu/found_corp.jsx';
import BuyStock from './context_menu/buy_stock.jsx';
import SellTrade from './context_menu/sell_trade.jsx';
import UntieMerge from './context_menu/untie_merge.jsx';

class ContextMenu extends React.Component {

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
          <BuyStock playerInfo={this.props.playerInfo} corps={this.props.corps} conn={this.props.conn} />
        );

      case 'SellTrade':
        return (
          <SellTrade playerInfo={this.props.playerInfo} corps={this.props.corps} conn={this.props.conn} />
        );

      case 'UntieMerge':
        return (
          <UntieMerge corps={this.props.tiedCorps} conn={this.props.conn} />
        );
    }
    return null;
  }

}

export default ContextMenu;
