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
        <p>Waiting for other players actions...</p>
      );
    } else {
      switch (this.props.gameState) {
        case 'PlayTile':
          return (
            <PlayTile conn={this.props.conn} gameID={this.props.gameID} />
          );

        case 'FoundCorp':
          return (
            <FoundCorp corps={this.props.corps} conn={this.props.conn} gameID={this.props.gameID} />
          );

        case 'BuyStock':
          return (
            <BuyStock playerInfo={this.props.playerInfo} corps={this.props.corps} conn={this.props.conn} gameID={this.props.gameID} />
          );

        case 'SellTrade':
          return (
            <SellTrade playerInfo={this.props.playerInfo} corps={this.props.corps} conn={this.props.conn} gameID={this.props.gameID} />
          );

        case 'UntieMerge':
          return (
            <UntieMerge corps={this.props.tiedCorps} conn={this.props.conn} gameID={this.props.gameID} />
          );
        }
    }
    return null;
  }

}

export default ContextMenu;
