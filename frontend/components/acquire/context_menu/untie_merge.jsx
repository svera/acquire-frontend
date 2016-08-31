import React from 'react';
import ClaimEnd from './claim_end.jsx';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ContextMenuHeader from './context_menu_header.jsx';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';

class UntieMerge extends React.Component {

  constructor(props) {
      super(props);
      this.handleClickUntie = this.handleClickUntie.bind(this);
      this.handleClickCorp = this.handleClickCorp.bind(this);

      this.corp = null;
  }

  handleClickCorp(event) {
    this.corp = parseInt(event.target.value)
  }

  handleClickUntie() {
    var message = {"typ": "unt", "par": {"cor": this.corp}};
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
      var selectableCorps = [];
      for (var i = 0; i < this.props.corps.length; i++) {
          if (this.props.corps[i].tie) {
            selectableCorps.push(
              <Button value={i} onClick={this.handleClickCorp} key={"u"+i}>
                {this.props.corps[i].nam}
              </Button>
            );
          }
      }
      return (
        <div>
          <ContextMenuHeader conn={this.props.conn} translator={this.props.translator} text="game.untie_merge_title" />
          <Row>
            <Col xs={12}>
              <form>
                <FormGroup>
                  <ButtonGroup>
                    {selectableCorps}
                  </ButtonGroup>
                </FormGroup>
              </form>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Button bsStyle="primary" onClick={this.handleClickUntie}>
                {this.props.translator("game.untie_merge")}
              </Button>
            </Col>
          </Row>
        </div>
      );
  }

}

export default UntieMerge;
