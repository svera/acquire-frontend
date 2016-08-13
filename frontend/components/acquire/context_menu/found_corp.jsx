import React from 'react';
import ClaimEnd from './claim_end.jsx';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class FoundCorp extends React.Component {

  constructor(props) {
      super(props);
      this.handleClickCreate = this.handleClickCreate.bind(this);
      this.handleClickCorp = this.handleClickCorp.bind(this);

      this.corp = null;
  }

  handleClickCorp(event) {
    console.log(event.target.value)
    this.corp = parseInt(event.target.value)
  }

  handleClickCreate() {
    var message = {"typ": "ncp", "par": {"cor": this.corp}};
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  foundableCorpsMarkup() {
    var selectableCorps = [];
    for (var i = 0; i < this.props.corps.length; i++) {
        if (this.props.corps[i].siz == 0) {
          selectableCorps.push(
                <Button value={i} onClick={this.handleClickCorp} bsSize="small">
                  {this.props.corps[i].nam}
                </Button>
          );
        }
    }
    return selectableCorps;
  }

  render() {
      return (
        <div>
          <Row>
            <Col xs={9}>
              <p>{this.props.translator("game.founded_corporation")}</p>
            </Col>
            <Col xs={3}>
              <ClaimEnd conn={this.props.conn} translator={this.props.translator} />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <form>
                <FormGroup>
                  <ButtonGroup>
                    {this.foundableCorpsMarkup()}
                  </ButtonGroup>
                </FormGroup>
                <FormGroup>
                  <ButtonToolbar>
                    <Button bsStyle="primary" onClick={this.handleClickCreate}>
                      {this.props.translator("game.found_corporation")}
                    </Button>
                  </ButtonToolbar>
                </FormGroup>
              </form>
            </Col>
          </Row>
        </div>
      );
  }

}

export default FoundCorp;
