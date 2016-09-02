import React from 'react';
import FoundCorp from './context_menu/found_corp.jsx';
import BuyStock from './context_menu/buy_stock.jsx';
import SellTrade from './context_menu/sell_trade.jsx';
import UntieMerge from './context_menu/untie_merge.jsx';
import PlayTile from './context_menu/play_tile.jsx';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ClaimEnd from './context_menu/claim_end.jsx';

class ContextMenu extends React.Component {

  getContent() {
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
  }

  getTitle() {
    return (
      <Row>
        <Col xs={9}>
          <p>{this.props.playerInfo.nam} ({this.props.playerInfo.csh}$)</p>
        </Col>
        <Col xs={3}>
          <ClaimEnd conn={this.props.conn} translator={this.props.translator} />
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <Panel header={this.getTitle()}>
        {this.getContent()}
      </Panel>
    )
  }

}

export default ContextMenu;
