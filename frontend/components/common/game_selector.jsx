import React from 'react';
import $ from 'jquery';

class GameSelector extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    event.preventDefault();
    var message = {"typ": "cre", "roo": "", "par": {"bri": "acquire"}}
    this.props.conn.send(
        JSON.stringify(message)
    );
    }

  render() {
    return (
      <div>
        <select name="game">
          <option value="acquire">Acquire</option>
        </select>
        <button onClick={this.handleClick} className="btn btn-primary">New game</button>
      </div>
    );
  }

}

export default GameSelector;
