import React from 'react';

class PlayerInfobox extends React.Component {

  render() {
      return (
        <div className="table-responsive">
          <table className="table table-condensed small">
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        {this.corpsHeaderMarkup()}
                    </tr>
                </thead>
                <tbody>
                <tr>
                  <td><strong>{this.props.playerInfo.nam}</strong></td>
                  <td>{this.props.playerInfo.csh}$</td>
                  <td className="c0">{this.props.playerInfo.own[0]}</td>
                  <td className="c1">{this.props.playerInfo.own[1]}</td>
                  <td className="c2">{this.props.playerInfo.own[2]}</td>
                  <td className="c3">{this.props.playerInfo.own[3]}</td>
                  <td className="c4">{this.props.playerInfo.own[4]}</td>
                  <td className="c5">{this.props.playerInfo.own[5]}</td>
                  <td className="c6">{this.props.playerInfo.own[6]}</td>
                </tr>
                {this.rivalsInfoMarkup()}
              </tbody>
          </table>
      </div>
      );
  }

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
            <td key={"rival-info-"+rivalNumber+"own-"+j} className={"c"+j}>{this.props.rivalsInfo[rivalNumber].own[j]}</td>
        );
      }

    return rivalsOwnedSharesInfo;
  }

}

export default PlayerInfobox;
