import React from 'react';
import ClaimEnd from './claim_end.jsx';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
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
                <span className={"c"+i}>&#9632;&nbsp;</span>              
                {this.props.corps[i].nam}
              </Button>
            );
          }
      }
      return (
        <div>
          <p>{this.props.translator("game.untie_merge_title")}</p>
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
              <Button bsStyle="primary" onClick={this.handleClickUntie} className="pull-right">
                {this.props.translator("game.untie_merge")}
              </Button>
            </Col>
          </Row>
        </div>
      );
  }

}

export default UntieMerge;