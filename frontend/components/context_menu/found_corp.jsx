import React from 'react';
import ClaimEnd from './claim_end.jsx';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {addStyle} from 'react-bootstrap/lib/utils/bootstrapUtils'

class FoundCorp extends React.Component {

  constructor(props) {
      super(props);
      this.handleClickCreate = this.handleClickCreate.bind(this);
      this.handleClickCorp = this.handleClickCorp.bind(this);

      this.state = {
        buttonDisabled: true,
      }

      this.corp = null;
  }

  handleClickCorp(event) {
    this.setState({buttonDisabled: false});
    this.corp = parseInt(event.target.value)
  }

  handleClickCreate() {
    var message = {"typ": "ncp", "par": {"cor": this.corp}};
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  foundableCorpsMarkup(offset, limit) {
    var selectableCorps = [];
    for (var i = offset; i < limit; i++) {
        if (this.props.corps[i].siz == 0) {
          selectableCorps.push(
            <Button value={i} onClick={this.handleClickCorp} bsSize="xsmall" key={"f"+i}>
              <span className={"c"+i}>&#9632;&nbsp;</span>
              {this.props.corps[i].nam}
            </Button>
          );
        }
    }
    return selectableCorps;
  }

  showErrors() {
    if (this.props.error != '') {
      return this.props.translator("game."+this.props.error);
    }
    return '';
  }
  
  render() {
      return (
        <div>
          <p>{this.props.translator("game.founded_corporation")}</p>
          <Row>
            <Col xs={12}>
              <form>
                <FormGroup>
                  <ButtonToolbar>
                    <ButtonGroup>
                      {this.foundableCorpsMarkup(0, 2)}
                    </ButtonGroup>
                    <ButtonGroup>
                      {this.foundableCorpsMarkup(2, 5)}
                    </ButtonGroup>
                    <ButtonGroup>
                      {this.foundableCorpsMarkup(5, 7)}
                    </ButtonGroup>
                  </ButtonToolbar>
                </FormGroup>
              </form>
            </Col>
          </Row>
          <Row>
            <Col xs={7}>
              <p className="text-danger">{this.showErrors()}</p>
            </Col>
            <Col xs={5}>
              <Button bsStyle="primary" onClick={this.handleClickCreate} disabled={this.state.buttonDisabled} className="pull-right">
                {this.props.translator("game.found_corporation")}
              </Button>
            </Col>
          </Row>          
        </div>
      );
  }

}

export default FoundCorp;
