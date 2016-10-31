import React from 'react';
import ClaimEnd from './claim_end.jsx';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

class BuyStock extends React.Component {

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      });
      this.audio = new Audio('../../../../snd/till-with-bell.wav');

      this.state = {
        error: '',
        buttonDisabled: false,
      }

      this.buy = {};
      for (var i = 0; i < this.props.corps.length; i++) {
        if (this.props.corps[i].siz > 0) {
          this.buy[i] = 0;
        }
      }
  }

  handleChange(event) {
    this.buy[event.target.name] = parseInt(event.target.value);
    var errorMessage = this.isValid();
    if (errorMessage != '') {
      this.setState({
        error: errorMessage,
        buttonDisabled: true
      });
    } else {
      this.setState({
        error: '',
        buttonDisabled: false
      });
    }
  }

  handleClick() {
    var message = {"typ": "buy", "par": {"cor": {}}};
    for (var corp in this.buy) {
      if (this.buy.hasOwnProperty(corp)) {
        message["par"]["cor"][corp] = parseInt(this.buy[corp]);
      }
    }
    this.audio.play();
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  isValid() {
    var total = 0;
    var amount = 0;
    for (var corp in this.buy) {
      total += this.buy[corp];
      amount += this.buy[corp]*this.props.corps[corp].prc;
    }
    if (total > 3) {
      return this.props.translator("game.errors.buy_too_many_shares");
    }
    if (amount > this.props.playerInfo.csh) {
      return this.props.translator("game.errors.not_enough_cash");
    }
    return '';
  }

  buyStockCorpsMarkup(start, end) {
    var selectableCorps  = [];
    for (var i = start; i < end; i++) {
        var disabled = true;
        var muted = "text-muted"
        if (this.props.corps[i].siz > 0 && this.props.corps[i].rem > 0) {
          disabled = false;
          muted = ""
        }
        selectableCorps.push(
          <li key={"buy-stock-"+i} className={muted}><label>
              <span className={"c"+i}>&#9632;&nbsp;</span>
              {this.props.corps[i].nam}&nbsp;
              <FormControl name={i} componentClass="select" onChange={this.handleChange} disabled={disabled} className="input-sm">
                <option value="0">0</option>
                <option value="1">1 ({this.formatter.format(this.props.corps[i].prc)})</option>
                <option value="2">2 ({this.formatter.format(this.props.corps[i].prc*2)})</option>
                <option value="3">3 ({this.formatter.format(this.props.corps[i].prc*3)})</option>
              </FormControl>
          </label></li>
        );
    }
    return selectableCorps;
  }

  showErrors() {
    if (this.state.error != '') {
      return (
        <p className="text-danger">{this.state.error}</p>
      );
    }
  }

  render() {
      return (
        <div>
          <p className="hidden-xs">{this.props.translator("game.buy_stock_description")}</p>
          <Row>
            <Col xs={3}>
              <ul className="list-unstyled list-inline">
                {this.buyStockCorpsMarkup(0, 2)}
              </ul>
            </Col>
            <Col xs={3}>
              <ul className="list-unstyled list-inline">
                {this.buyStockCorpsMarkup(2, 4)}
              </ul>
            </Col>
            <Col xs={3}>
              <ul className="list-unstyled list-inline">
                {this.buyStockCorpsMarkup(4, 6)}
              </ul>
            </Col>
            <Col xs={3}>
              <ul className="list-unstyled list-inline">
                {this.buyStockCorpsMarkup(6, 7)}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs={7}>
              {this.showErrors()}
            </Col>
            <Col xs={5}>
              <Button bsStyle="primary" onClick={this.handleClick} disabled={this.state.buttonDisabled} className="pull-right">
                {this.props.translator("game.buy_stock")}
              </Button>
            </Col>
          </Row>
        </div>
      );
  }

}

export default BuyStock;
