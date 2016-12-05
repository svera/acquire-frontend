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
          <DropdownButton bsStyle="default" bsSize="large" title={this.props.text} id="add-bot">
            <MenuItem eventKey="chaotic" onSelect={this.onSelectHandler}>Chaotic</MenuItem>
          </DropdownButton>
    );
  }

}

export default AddBot;