import React from 'react';
import ClaimEnd from './claim_end.jsx';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';

class SellTrade extends React.Component {

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleChangeSell = this.handleChangeSell.bind(this);
      this.handleChangeTrade = this.handleChangeTrade.bind(this);
      this.formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      });

      this.state = {
        error: '',
        buttonDisabled: false,
      }      

      this.corps = {};
      for (var i = 0; i < this.props.corps.length; i++) {
          if (this.props.corps[i].def) {
            this.corps[i] = {};
            this.corps[i].sel = 0;
            this.corps[i].tra = 0;
          }
      }
  }

  handleChangeSell(event) {
    this.corps[event.target.name].sel = parseInt(event.target.value);
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

  handleChangeTrade(event) {
    this.corps[event.target.name].tra = parseInt(event.target.value);
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

  handleClick(event) {
    var message =  {"typ": "sel", "cnt": {"cor": this.corps}};
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  sellTradeCorpsMarkup() {
    var selectableCorps = [];
    var sellOptions = [];
    var tradeOptions = [];
    for (var i = 0; i < this.props.corps.length; i++) {
        if (this.props.corps[i].def) {
          selectableCorps.push(
            <tr key={"sell-trade-"+i}>
              <td><span className={"c"+i}>&#9632;&nbsp;</span>{this.props.corps[i].nam}</td>
              <td>
                <FormControl name={i} componentClass="select" onChange={this.handleChangeSell}>
                  {this.sellOptions(i)}
                </FormControl>
              </td>
              <td>
                <FormControl name={i} componentClass="select" onChange={this.handleChangeTrade}>
                  {this.tradeOptions(i)}
                </FormControl>
              </td>
            </tr>
          );
        }
    }
    return selectableCorps;
  }

  sellOptions(corpNumber) {
    var sellOptions = [];

    for (var s=0; s <= this.props.playerInfo.own[corpNumber]; s++) {
      sellOptions.push(
        <option value={s} key={"s"+s}>{s} ({this.formatter.format(parseInt(this.props.corps[corpNumber].prc)*s)})</option>
      );
    }
    return sellOptions;
  }

  tradeOptions(corpNumber) {
    var tradeOptions = [];
 
    for (var t=0; t <= this.props.playerInfo.own[corpNumber]; t++, t++) {
      tradeOptions.push(
        <option value={t} key={"t"+t}>{t}</option>
      );
    }
    return tradeOptions;
  }

  isValid() {
    for (var i = 0; i < this.props.corps.length; i++) {
      if (this.props.corps[i].def) {
        if (this.corps[i].tra + this.corps[i].sel > this.props.playerInfo.own[i]) {
          return this.props.translator("game.errors.not_enough_shares");
        }
      }
    }
    return '';
  }  

  showErrors() {
    if (this.state.error != '') {
      return this.state.error;
    }
    if (this.props.error != '') {
      return this.props.translator("game."+this.props.error);
    }
    return '';
  }

  showSuccess() {
    if (this.props.success != '') {
      return this.props.translator("game."+this.props.success);
    }
    return '';
  }

  render() {
      return (
        <div>
          <p>{this.props.translator("game.sell_trade_title")}</p>
          <Row>
            <Col xs={12}>
              <Table condensed>
                  <thead><tr>
                      <th>&nbsp;</th><th>{this.props.translator("game.sell")}</th><th>{this.props.translator("game.trade")}</th>
                  </tr></thead>
                  <tbody>
                    {this.sellTradeCorpsMarkup()}
                  </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col xs={7}>
              <p className="text-danger">{this.showErrors()}</p>
              <p className="text-success">{this.showSuccess()}</p>
            </Col>
            <Col xs={5}>
              <Button bsStyle="primary" onClick={this.handleClick} disabled={this.state.buttonDisabled} className="pull-right">
                {this.props.translator("game.sell_trade")}
              </Button>
            </Col>
          </Row>
        </div>
      );
  }

}

export default SellTrade;
