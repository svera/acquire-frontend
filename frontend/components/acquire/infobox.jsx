import React from 'react';

class Infobox extends React.Component {

  corpsHeaderMarkup() {
    var corpsHeader = [];
    for (var i = 0; i < this.props.corps.length; i++) {
      corpsHeader.push(
        <th key={"corp-header"+i} nowrap="nowrap"><span className={"c"+i}>&nbsp;</span> {this.props.corps[i].nam}</th>
      )
    }
    return corpsHeader;
  }

  render() {
      var corpsSizes = [];
      var corpsPrices = [];
      var corpsMajority = [];
      var corpsMinority = [];
      var corpsRemaining = [];
      for (var i = 0; i < this.props.corps.length; i++) {
        corpsSizes.push(<td key={"info-size-"+i}>{this.props.corps[i].siz}</td>);
        corpsPrices.push(<td key={"info-price-"+i}>{this.props.corps[i].prc}</td>);
        corpsMajority.push(<td key={"info-majority-"+i}>{this.props.corps[i].maj}</td>);
        corpsMinority.push(<td key={"info-minority-"+i}>{this.props.corps[i].min}</td>);
        corpsRemaining.push(<td key={"info-remaining-"+i}>{this.props.corps[i].rem}</td>);
      }
      return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    {this.corpsHeaderMarkup()}
                </tr>
            </thead>
            <tbody>
              <tr>
                <td>Size</td>
                {corpsSizes}
              </tr>
              <tr>
                <td>Price</td>
                {corpsPrices}
              </tr>
              <tr>
                <td>Majority</td>
                {corpsMajority}
              </tr>
              <tr>
                <td>Minority</td>
                {corpsMinority}
              </tr>
              <tr>
                <td>Remaining</td>
                {corpsRemaining}
              </tr>
            </tbody>
        </table>
      );
  }

}

export default Infobox;
