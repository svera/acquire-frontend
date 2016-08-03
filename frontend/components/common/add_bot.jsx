import React from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';

class AddBot extends React.Component {

  constructor(props) {
    super(props);
    this.onSelectHandler = this.onSelectHandler.bind(this);
  }

  onSelectHandler(eventKey) {
    var message = {"typ": "bot", "par": {"lvl": eventKey}}
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <DropdownButton bsStyle="default" bsSize="xsmall" title={this.props.text} id="add-bot">
            <MenuItem eventKey="random" onSelect={this.onSelectHandler}>Random</MenuItem>
          </DropdownButton>
          &nbsp;
        </FormGroup>
      </Form>
    );
  }

}

export default AddBot;
