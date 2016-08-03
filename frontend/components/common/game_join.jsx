import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';

class GameJoin extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.gameID = null;
  }

  handleChange(event) {
    this.gameID = event.target.value;
  }

  handleClick() {
    event.preventDefault();
    var message = {"typ": "joi", "par": {"rom": this.gameID}}
    console.log(JSON.stringify(message));
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <ControlLabel htmlFor="gameID">game ID</ControlLabel>
          <FormControl id="gameID" type="text" name="gameID" onChange={this.handleChange} />
          <Button onClick={this.handleClick} bsStyle="default">{this.props.text}</Button>
        </FormGroup>
      </Form>
    );
  }

}

export default GameJoin;
