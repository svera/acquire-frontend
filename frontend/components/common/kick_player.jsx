import React from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
class KickPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    var message = {"typ": "kck", "par": {"ply": event.target.value}}
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
    if (sessionStorage.getItem('role') == 'mng') {
      return (
        <a href="#" onClick={this.handleClick} value={this.props.playerNumber}><Glyphicon glyph="trash" title={this.props.text} /></a>
      );
    }
    return null;
  }

}

export default KickPlayer;
