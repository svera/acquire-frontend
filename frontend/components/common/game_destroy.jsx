import React from 'react';

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
        <button onClick={this.handleClick} className="btn btn-default">{this.props.term}</button>
      );
    }
    return null;
  }

}

export default GameDestroy;
