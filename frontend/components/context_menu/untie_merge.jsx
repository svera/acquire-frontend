import React from 'react';
import ClaimEnd from './claim_end.jsx';
import Button from 'react-bootstrap/lib/Button';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';

class UntieMerge extends React.Component {

  constructor(props) {
      super(props);
      this.handleClickUntie = this.handleClickUntie.bind(this);
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

  handleClickUntie() {
    var message = {"typ": "unt", "par": {"cor": this.corp}};
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  showErrors() {
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
      var selectableCorps = [];
      for (var i = 0; i < this.props.corps.length; i++) {
          if (this.props.corps[i].tie) {
            selectableCorps.push(
              <ToggleButton value={i} onChange={this.handleClickCorp} key={"u"+i}>
                <span className={"c"+i}>&#9632;&nbsp;</span>              
                {this.props.corps[i].nam}
              </ToggleButton>
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
                  <ToggleButtonGroup type="radio" name="corporation">
                    {selectableCorps}
                  </ToggleButtonGroup>
                </FormGroup>
              </form>
            </Col>
          </Row>
          <Row>
            <Col xs={7}>
              <p className="text-danger">{this.showErrors()}</p>
              <p className="text-success">{this.showSuccess()}</p>
            </Col>          
            <Col xs={5}>
              <Button bsStyle="primary" onClick={this.handleClickUntie} disabled={this.state.buttonDisabled} className="pull-right">
                {this.props.translator("game.untie_merge")}
              </Button>
            </Col>
          </Row>
        </div>
      );
  }

}

export default UntieMerge;
