import React from 'react';

class KickPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    var message = {"typ": "kck", "rom": this.props.gameID, "par": {"ply": event.target.value}}
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
    if (sessionStorage.getItem('role') == 'mng') {
      return (
        <a href="#" onClick={this.handleClick} value={this.props.playerNumber}>Remove</a>
      );
    }
    return null;
  }

}

export default KickPlayer;
