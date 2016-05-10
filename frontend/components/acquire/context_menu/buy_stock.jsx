import React from 'react';
import ClaimEnd from './claim_end.jsx';

class BuyStock extends React.Component {

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);

      this.buy = {};
      for (var i = 0; i < this.props.corps.length; i++) {
        if (this.props.corps[i].siz > 0) {
          var corpName = this.props.corps[i].nam.toLowerCase();
          this.buy[corpName] = 0;
        }
      }
  }

  handleChange(event) {
    this.buy[event.target.name] = parseInt(event.target.value);
  }

  handleClick() {
    var message = {"typ": "buy", "par": {"cor": {}}};
    for (var corp in this.buy) {
      if( this.buy.hasOwnProperty(corp) ) {
        message["par"]["cor"][corp] = parseInt(this.buy[corp]);
      }
    }
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  buyStockCorpsMarkup() {
    var selectableCorps = [];
    for (var i = 0; i < this.props.corps.length; i++) {
        if (this.props.corps[i].siz > 0) {
          selectableCorps.push(
            <li key={"buy-stock-"+i}><label>
                <span>{this.props.corps[i].nam}</span>
                <input type="number" min="0" max="3" name={this.props.corps[i].nam.toLowerCase()} defaultValue="0" onChange={this.handleChange}/>
            </label></li>
          );
        }
    }
    return selectableCorps;
  }

  render() {
      return (
        <div>
          <ul className="list-unstyled">
            {this.buyStockCorpsMarkup()}
          </ul>
          <input type="button" className="btn btn-primary" value="Buy stock" onClick={this.handleClick} />
          <ClaimEnd conn={this.props.conn} />
        </div>
      );
  }

}

export default BuyStock;
