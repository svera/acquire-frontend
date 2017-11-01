import React from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
class KickPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    var playerNumber = parseInt(event.currentTarget.dataset['number']);
    event.preventDefault();
    var message = {"typ": "kck", "cnt": {"ply": playerNumber}}
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
    if (sessionStorage.getItem('role') == 'mng') {
      return (
        <a href="#" onClick={this.handleClick} data-number={this.props.playerNumber} className="pull-right">
          <Glyphicon glyph="trash" title={this.props.text} />
        </a>
      );
    }
    return null;
  }

}

export default KickPlayer;
