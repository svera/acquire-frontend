import React from 'react';
import $ from 'jquery';

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
        <button onClick={this.handleClick} className="btn btn-primary">{this.props.text}</button>
      </div>
    );
  }

}

export default GameCreate;
