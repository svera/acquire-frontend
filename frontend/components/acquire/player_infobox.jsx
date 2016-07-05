import React from 'react';

class PlayerInfobox extends React.Component {

  corpsHeaderMarkup() {
    var corpsHeader = [];
    for (var i = 0; i < this.props.corps.length; i++) {
      corpsHeader.push(
        <th key={"player-corp-header"+i}>{this.props.corps[i].nam}</th>
      )
    }
    return corpsHeader;
  }

  render() {
      return (
        <table className="table table-condensed">
              <thead>
                  <tr>
                      <th>{this.props.translator("game.cash")}</th>
                      {this.corpsHeaderMarkup()}
                  </tr>
              </thead>
              <tbody>
              <tr>
                <td>{this.props.playerInfo.csh}</td>
                <td>{this.props.playerInfo.own[0]}</td>
                <td>{this.props.playerInfo.own[1]}</td>
                <td>{this.props.playerInfo.own[2]}</td>
                <td>{this.props.playerInfo.own[3]}</td>
                <td>{this.props.playerInfo.own[4]}</td>
                <td>{this.props.playerInfo.own[5]}</td>
                <td>{this.props.playerInfo.own[6]}</td>
              </tr>
            </tbody>
        </table>
      );
  }

}

export default PlayerInfobox;
