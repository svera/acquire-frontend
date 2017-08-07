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
import PlayerInfo from './player_info.jsx';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Badge from 'react-bootstrap/lib/Badge';

class ContextMenu extends React.Component {

  getContent() {
    if (!this.props.status.ply.trn) {
      return (
        <p>{this.props.translator("game.waiting")}</p>
      );
    } else {
      switch (this.props.status.sta) {
        case 'PlayTile':
          return (
            <PlayTile conn={this.props.conn} translator={this.props.translator} error={this.props.error} success={this.props.success} />
          );

        case 'FoundCorp':
          return (
            <FoundCorp corps={this.props.status.cor} conn={this.props.conn} translator={this.props.translator} error={this.props.error} success={this.props.success} />
          );

        case 'BuyStock':
          return (
            <BuyStock playerInfo={this.props.status.ply} corps={this.props.status.cor} conn={this.props.conn} translator={this.props.translator} error={this.props.error} success={this.props.success} />
          );

        case 'SellTrade':
          return (
            <SellTrade playerInfo={this.props.status.ply} corps={this.props.status.cor} conn={this.props.conn} translator={this.props.translator} error={this.props.error} success={this.props.success} />
          );

        case 'UntieMerge':
          return (
            <UntieMerge corps={this.props.status.cor} conn={this.props.conn} translator={this.props.translator} error={this.props.error} success={this.props.success} />
          );
        }
    }
  }

  getTitle() {
    return (
      <Row>
        <Col xs={9}>
          <PlayerInfo player={this.props.status.ply} translator={this.props.translator} />
        </Col>
        <Col xs={3}>
          <ClaimEnd conn={this.props.conn} translator={this.props.translator} />
        </Col>
      </Row>
    );
  }

  getPlayerInfo() {
    return (
      <span>
        {this.props.status.ply.nam} ({this.props.status.ply.csh}$)<br />
        <Badge className={"c0"} title={this.props.status.cor[0].nam}>{this.props.status.ply.own[0]}</Badge>&nbsp;
        <Badge className={"c1"} title={this.props.status.cor[1].nam}>{this.props.status.ply.own[1]}</Badge>&nbsp;
        <Badge className={"c2"} title={this.props.status.cor[2].nam}>{this.props.status.ply.own[2]}</Badge>&nbsp;
        <Badge className={"c3"} title={this.props.status.cor[3].nam}>{this.props.status.ply.own[3]}</Badge>&nbsp;
        <Badge className={"c4"} title={this.props.status.cor[4].nam}>{this.props.status.ply.own[4]}</Badge>&nbsp;
        <Badge className={"c5"} title={this.props.status.cor[5].nam}>{this.props.status.ply.own[5]}</Badge>&nbsp;
        <Badge className={"c6"} title={this.props.status.cor[6].nam}>{this.props.status.ply.own[6]}</Badge>&nbsp;
      </span>
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
