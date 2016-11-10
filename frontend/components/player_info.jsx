import React from 'react';
import Badge from 'react-bootstrap/lib/Badge';

class PlayerInfo extends React.Component {

  render() {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });

    return (
      <span style={{whiteSpace: "nowrap"}}>
        {formatter.format(parseInt(this.props.player.csh))}&nbsp;
        <Badge className={"c0"} title={this.props.corps[0].nam}>{this.props.player.own[0]}</Badge>&nbsp;
        <Badge className={"c1"} title={this.props.corps[1].nam}>{this.props.player.own[1]}</Badge>&nbsp;
        <Badge className={"c2"} title={this.props.corps[2].nam}>{this.props.player.own[2]}</Badge>&nbsp;
        <Badge className={"c3"} title={this.props.corps[3].nam}>{this.props.player.own[3]}</Badge>&nbsp;
        <Badge className={"c4"} title={this.props.corps[4].nam}>{this.props.player.own[4]}</Badge>&nbsp;
        <Badge className={"c5"} title={this.props.corps[5].nam}>{this.props.player.own[5]}</Badge>&nbsp;
        <Badge className={"c6"} title={this.props.corps[6].nam}>{this.props.player.own[6]}</Badge>&nbsp;
      </span>
    );
  }

}

export default PlayerInfo;
