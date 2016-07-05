import React from 'react';

class RivalsInfobox extends React.Component {

  corpsHeaderMarkup() {
    var corpsHeader = [];
    for (var i = 0; i < this.props.corps.length; i++) {
      corpsHeader.push(
        <th key={"rival-corp-header"+i}>{this.props.corps[i].nam}</th>
      )
    }
    return corpsHeader;
  }

  rivalsInfoMarkup() {
    var rivalsInfo = [];
    for (var i = 0; i < this.props.rivalsInfo.length; i++) {
        rivalsInfo.push(
          <tr key={"rival-info-"+i}>
            <td>{this.props.rivalsInfo[i].nam}</td>
            <td>{this.props.rivalsInfo[i].csh}</td>
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
            <td key={"rival-info-"+rivalNumber+"own-"+j}>{this.props.rivalsInfo[rivalNumber].own[j]}</td>
        );
      }

    return rivalsOwnedSharesInfo;
  }

  render() {
      return (
        <table className="table">
              <thead>
                  <tr>
                      <th>&nbsp;</th>
                      <th>{this.props.translator("game.cash")}</th>
                      {this.corpsHeaderMarkup()}
                  </tr>
              </thead>
              <tbody>
                {this.rivalsInfoMarkup()}
            </tbody>
        </table>
      );
  }

}

export default RivalsInfobox;
