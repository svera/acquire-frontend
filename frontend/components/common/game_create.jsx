import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';

class GameCreate extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handlePlayerTimeoutChange = this.handlePlayerTimeoutChange.bind(this);

    this.playerTimeout = 0;
  }

  handleClick() {
    event.preventDefault();
    var message = {"typ": "cre", "par": {"bri": this.props.gameName, "pto": this.playerTimeout}}
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  handlePlayerTimeoutChange(event) {
    this.playerTimeout = parseInt(event.target.value);
  }

  render() {
    return (
      <Panel>
          <Row>
              <Col xs={12}>
                  <form>
                      <FormGroup>
                        <FormControl name="player-time" componentClass="select" onChange={this.handlePlayerTimeoutChange}>
                            <option value="0" key={"player-time-0"}>{this.props.translator('no_limit')}</option>
                            <option value="15" key={"player-time-15"}>{this.props.translator('x_seconds', {"number": 15})}</option>
                            <option value="30" key={"player-time-30"}>{this.props.translator('x_seconds', {"number": 30})}</option>
                            <option value="45" key={"player-time-45"}>{this.props.translator('x_seconds', {"number": 45})}</option>
                            <option value="60" key={"player-time-60"}>{this.props.translator('one_minute')}</option>
                        </FormControl>
                      </FormGroup>
                      <ButtonGroup>
                        <Button onClick={this.handleClick} bsStyle="primary" bsSize="large">{this.props.translator('create_game')}</Button>
                      </ButtonGroup>
                  </form>
              </Col>
          </Row>
      </Panel>      
    );
  }

}

export default GameCreate;
