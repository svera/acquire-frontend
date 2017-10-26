import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';

class PlayerName extends React.Component {

  constructor(props) {
      super(props);
      this.handleClientNameSubmit = this.handleClientNameSubmit.bind(this);
      this.handleClientNameChange = this.handleClientNameChange.bind(this);
  }

  handleClientNameSubmit(event) {
    event.preventDefault();
    var message = {"typ": "scd", "cnt": {"nam": localStorage.getItem('clientName')}};
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  handleClientNameChange(event) {
   localStorage.setItem('clientName', event.target.value);
  }

  render() {
    return (
        <form onSubmit={this.handleClientNameSubmit}>
            <FormGroup>
                <FormControl name="player-name" ref="player-name" type="text" bsSize="small" defaultValue={localStorage.getItem('clientName')} onChange={this.handleClientNameChange} placeholder={this.props.translator('lobby.your_name')}></FormControl>
            </FormGroup>
        </form>
    );
  }

}

export default PlayerName;
