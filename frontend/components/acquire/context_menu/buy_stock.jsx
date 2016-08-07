import React from 'react';
import ClaimEnd from './claim_end.jsx';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

class BuyStock extends React.Component {

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);

      this.buy = {};
      for (var i = 0; i < this.props.corps.length; i++) {
        if (this.props.corps[i].siz > 0) {
          this.buy[i] = 0;
        }
      }
  }

  handleChange(event) {
    this.buy[event.target.name] = parseInt(event.target.value);
  }

  handleClick() {
    var message = {"typ": "buy", "par": {"cor": {}}};
    for (var corp in this.buy) {
      if (this.buy.hasOwnProperty(corp)) {
        message["par"]["cor"][corp] = parseInt(this.buy[corp]);
      }
    }
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  buyStockCorpsMarkup(start, end) {
    var selectableCorps  = [];
    for (var i = start; i < end; i++) {
        if (this.props.corps[i].siz > 0) {
          selectableCorps.push(
            <ListGroupItem key={"buy-stock-"+i}><label>
                {this.props.corps[i].nam}&nbsp;
                <input type="number" min="0" max="3" name={i} defaultValue="0" onChange={this.handleChange}/>
            </label></ListGroupItem>
          );
        } else {
          selectableCorps.push(
            <ListGroupItem key={"buy-stock-"+i} className="text-muted"><label>{this.props.corps[i].nam}</label></ListGroupItem>
          );
        }
    }
    return selectableCorps;
  }

  render() {
    console.log(this.props.corps)
      return (
        <div>
          <Row>
            <Col xs={6} md={3}>
              <ul className="list-unstyled list-group">
                {this.buyStockCorpsMarkup(0, 2)}
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <ul className="list-unstyled list-group">
                {this.buyStockCorpsMarkup(2, 4)}
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <ul className="list-unstyled list-group">
                {this.buyStockCorpsMarkup(4, 6)}
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <ul className="list-unstyled list-group">
                {this.buyStockCorpsMarkup(6, 7)}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Button bsStyle="primary" onClick={this.handleClick}>
                {this.props.translator("game.buy_stock")}
              </Button>
              <ClaimEnd conn={this.props.conn} translator={this.props.translator} />
            </Col>
          </Row>
        </div>
      );
  }

}

export default BuyStock;
