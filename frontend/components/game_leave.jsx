import React from 'react';

class GameLeave extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    var message = {"typ": "qui", "par": {"ply": "slf"}}
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
    if (sessionStorage.getItem('role') ==! 'mng') {
      return (
        <a href="#" onClick={this.handleClick}>Leave game</a>
      );
    }
    return null;
  }

}

export default GameLeave;
