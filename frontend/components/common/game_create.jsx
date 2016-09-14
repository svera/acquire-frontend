import React from 'react';
import Button from 'react-bootstrap/lib/Button';

class GameCreate extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    event.preventDefault();
    var message = {"typ": "cre", "par": {"bri": this.props.gameName}}
    this.props.conn.send(
        JSON.stringify(message)
    );
    }

  render() {
    return (
        <Button onClick={this.handleClick} bsStyle="primary" bsSize="large">{this.props.text}</Button>
    );
  }

}

export default GameCreate;
