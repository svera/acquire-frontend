import React from 'react';
import $ from 'jquery';
import Button from 'react-bootstrap/lib/Button';

class GameCreate extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    event.preventDefault();
    var message = {"typ": "cre", "roo": "", "par": {"bri": this.props.gameName}}
    this.props.conn.send(
        JSON.stringify(message)
    );
    }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} bsStyle="default" bsSize="large">{this.props.text}</Button>
      </div>
    );
  }

}

export default GameCreate;
