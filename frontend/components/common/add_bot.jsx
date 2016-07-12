import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';

class AddBot extends React.Component {

  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.bot = "random";
  }

  onClickHandler () {
    var message = {"typ": "bot", "rom": this.props.gameID, "par": {"nam": this.bot}}
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  onChangeHandler(event) {
    this.bot = event.target.value;
  }

  render() {
    return (
      <FormGroup>
        <FormControl componentClass="select" onChange={this.onChangeHandler}>
          <option value="random">Random</option>
        </FormControl>
        &nbsp;
        <Button onClick={this.onClickHandler} bsStyle="default">{this.props.text}</Button>
      </FormGroup>
    );
  }

}

export default AddBot;
