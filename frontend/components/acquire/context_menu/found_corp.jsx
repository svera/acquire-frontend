import React from 'react';
import ClaimEnd from './claim_end.jsx';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {addStyle} from 'react-bootstrap/lib/utils/bootstrapUtils'
import ContextMenuHeader from './context_menu_header.jsx';

class FoundCorp extends React.Component {

  constructor(props) {
      super(props);
      this.handleClickCreate = this.handleClickCreate.bind(this);
      this.handleClickCorp = this.handleClickCorp.bind(this);

      this.state = {
        buttonDisabled: true,
      }
/*
      addStyle(Button, 'c0');
      addStyle(Button, 'c1');
      addStyle(Button, 'c2');
      addStyle(Button, 'c3');
      addStyle(Button, 'c4');
      addStyle(Button, 'c5');
      addStyle(Button, 'c6');
*/
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
          <ContextMenuHeader conn={this.props.conn} translator={this.props.translator} text="game.founded_corporation" />
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
                <FormGroup>
                  <ButtonToolbar>
                    <Button bsStyle="primary" onClick={this.handleClickCreate} disabled={this.state.buttonDisabled} className="pull-right">
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
