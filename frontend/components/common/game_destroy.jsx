import React from 'react';
import Button from 'react-bootstrap/lib/Button';

class GameDestroy extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    var message = {"typ": "ter", "par": {}}
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
    if (sessionStorage.getItem('role') == 'mng') {
      return (
        <Button onClick={this.handleClick} bsStyle="default">{this.props.text}</Button>
      );
    }
    return null;
  }

}

export default GameDestroy;
