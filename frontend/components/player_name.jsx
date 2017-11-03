import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import Button from 'react-bootstrap/lib/Button';

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
                <InputGroup>
                    <FormControl name="player-name" ref="player-name" type="text" bsSize="small" defaultValue={localStorage.getItem('clientName')} onChange={this.handleClientNameChange} placeholder={this.props.translator('lobby.your_name')}></FormControl>
                    <InputGroup.Button>
                        <Button type="submit" bsSize="small">{this.props.translator('lobby.change_name')}</Button>
                    </InputGroup.Button>                    
                </InputGroup>
            </FormGroup>
        </form>
    );
  }

}

export default PlayerName;
