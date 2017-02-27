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
    this.disabled = false;
  }

  onSelectHandler(eventKey) {
    var message = {"typ": "bot", "par": {"lvl": eventKey}}
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  updateButtonState() {
    if (Object.keys(this.props.players).length == 6) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }


  render() {
    this.updateButtonState();    
    return (
      <DropdownButton bsStyle="default" title={this.props.translator('lobby.add_bot')} id="add-bot" disabled={this.disabled}>
        <MenuItem disabled>{this.props.translator('lobby.select_bot_level')}</MenuItem>
        <MenuItem eventKey="chaotic" onSelect={this.onSelectHandler}>Chaotic</MenuItem>
      </DropdownButton>
    );
  }

}

export default AddBot;
