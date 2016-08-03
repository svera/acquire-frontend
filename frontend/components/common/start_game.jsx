import React from 'react';
import Button from 'react-bootstrap/lib/Button';

class StartGame extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick () {
    var message = {"typ": "ini", "par": {}}
    console.log(JSON.stringify(message))
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
    return (
      <Button onClick={this.onClick} bsStyle="default" bsSize="lg">{this.props.text}</Button>
    );
  }

}

export default StartGame;
