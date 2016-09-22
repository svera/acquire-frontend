import React from 'react';
import Badge from 'react-bootstrap/lib/Badge';
import Table from 'react-bootstrap/lib/Table';

class PlayerInfobox extends React.Component {

  render() {
      return (
        <Table responsive condensed striped>
              <tbody>
                <tr>
                  <td><strong>{this.props.playerInfo.nam}</strong></td>
                  <td>{this.props.playerInfo.csh}$</td>
                  <td><Badge className="c0" title={this.props.corps[0].nam}>{this.props.playerInfo.own[0]}</Badge></td>
                  <td><Badge className="c1" title={this.props.corps[1].nam}>{this.props.playerInfo.own[1]}</Badge></td>
                  <td><Badge className="c2" title={this.props.corps[2].nam}>{this.props.playerInfo.own[2]}</Badge></td>
                  <td><Badge className="c3" title={this.props.corps[3].nam}>{this.props.playerInfo.own[3]}</Badge></td>
                  <td><Badge className="c4" title={this.props.corps[4].nam}>{this.props.playerInfo.own[4]}</Badge></td>
                  <td><Badge className="c5" title={this.props.corps[5].nam}>{this.props.playerInfo.own[5]}</Badge></td>
                  <td><Badge className="c6" title={this.props.corps[6].nam}>{this.props.playerInfo.own[6]}</Badge></td>
                </tr>
                {this.rivalsInfoMarkup()}
            </tbody>
        </Table>
      );
  }

  rivalsInfoMarkup() {
    var rivalsInfo = [];
    for (var i = 0; i < this.props.rivalsInfo.length; i++) {
        rivalsInfo.push(
          <tr key={"rival-info-"+i}>
            <td>{this.props.rivalsInfo[i].nam}</td>
            <td>{this.props.rivalsInfo[i].csh}$</td>
            {this.rivalsOwnedSharesInfoMarkup(i)}
          </tr>
        );
    }

    return rivalsInfo;
  }

  rivalsOwnedSharesInfoMarkup(rivalNumber) {
    var rivalsOwnedSharesInfo = [];
      for (var j = 0; j < this.props.rivalsInfo[rivalNumber].own.length; j++) {
        rivalsOwnedSharesInfo.push(
            <td key={"rival-info-"+rivalNumber+"own-"+j}>
              <Badge className={"c"+j} title={this.props.corps[j].nam}>{this.props.rivalsInfo[rivalNumber].own[j]}</Badge>
            </td>
        );
      }

    return rivalsOwnedSharesInfo;
  }

}

export default PlayerInfobox;
