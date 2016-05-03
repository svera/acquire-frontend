import React from 'react';

class Infobox extends React.Component {

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
                    <th nowrap="nowrap"><span className="sackson">&nbsp;</span> Sackson</th>
                    <th nowrap="nowrap"><span className="zeta">&nbsp;</span> Zeta</th>
                    <th nowrap="nowrap"><span className="hydra">&nbsp;</span> Hydra</th>
                    <th nowrap="nowrap"><span className="fusion">&nbsp;</span> Fusion</th>
                    <th nowrap="nowrap"><span className="america">&nbsp;</span> America</th>
                    <th nowrap="nowrap"><span className="phoenix">&nbsp;</span> Phoenix</th>
                    <th nowrap="nowrap"><span className="quantum">&nbsp;</span> Quantum</th>
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
