import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class GameCreate extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    event.preventDefault();
    var message = {"typ": "cre", "par": {"bri": this.props.gameName, "nam": localStorage.getItem('clientName')}};
    console.log(JSON.stringify(message));
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
    return (
        <Row>
            <Col xs={12}>
                <Button onClick={this.handleClick} bsStyle="primary" bsSize="large">{this.props.translator('create_game')}</Button>
            </Col>
        </Row>
    );
  }

}

export default GameCreate;
