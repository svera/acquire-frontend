import React from 'react';

class PlayerInfobox extends React.Component {

  corpsHeaderMarkup() {
    var corpsHeader = [];
    for (var i = 0; i < this.props.corps.length; i++) {
      corpsHeader.push(
        <th key={"player-corp-header"+i} className={"c"+i}>
          <span className="hidden-xs">{this.props.corps[i].nam}</span>
        </th>
      )
    }
    return corpsHeader;
  }

  render() {
      return (
        <div className="table-responsive">
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
                  <td className="c0">{this.props.playerInfo.own[0]}</td>
                  <td className="c1">{this.props.playerInfo.own[1]}</td>
                  <td className="c2">{this.props.playerInfo.own[2]}</td>
                  <td className="c3">{this.props.playerInfo.own[3]}</td>
                  <td className="c4">{this.props.playerInfo.own[4]}</td>
                  <td className="c5">{this.props.playerInfo.own[5]}</td>
                  <td className="c6">{this.props.playerInfo.own[6]}</td>
                </tr>
              </tbody>
          </table>
      </div>
      );
  }

}

export default PlayerInfobox;
