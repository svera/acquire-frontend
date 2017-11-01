import React from 'react';
import NavItem from 'react-bootstrap/lib/NavItem';

class GameLeave extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    var message = {"typ": "qui", "cnt": {"ply": "slf"}}
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
    if (sessionStorage.getItem('role') != 'mng') {
      return (
        <NavItem onClick={this.handleClick}>{this.props.text}</NavItem>
      );
    }
    return null;
  }

}

export default GameLeave;
