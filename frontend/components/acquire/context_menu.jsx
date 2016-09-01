import React from 'react';
import FoundCorp from './context_menu/found_corp.jsx';
import BuyStock from './context_menu/buy_stock.jsx';
import SellTrade from './context_menu/sell_trade.jsx';
import UntieMerge from './context_menu/untie_merge.jsx';
import PlayTile from './context_menu/play_tile.jsx';

class ContextMenu extends React.Component {

  render() {
    if (!this.props.playerInfo.trn) {
      return (
        <p>{this.props.translator("game.waiting")}</p>
      );
    } else {
      switch (this.props.gameState) {
        case 'PlayTile':
          return (
            <PlayTile conn={this.props.conn} translator={this.props.translator} />
          );

        case 'FoundCorp':
          return (
            <FoundCorp corps={this.props.corps} conn={this.props.conn} translator={this.props.translator} />
          );

        case 'BuyStock':
          return (
            <BuyStock playerInfo={this.props.playerInfo} player={this.props.playerInfo} corps={this.props.corps} conn={this.props.conn} translator={this.props.translator}  />
          );

        case 'SellTrade':
          return (
            <SellTrade playerInfo={this.props.playerInfo} corps={this.props.corps} conn={this.props.conn} translator={this.props.translator} />
          );

        case 'UntieMerge':
          return (
            <UntieMerge corps={this.props.corps} conn={this.props.conn} translator={this.props.translator} />
          );
        }
    }
    return null;
  }

}

export default ContextMenu;
