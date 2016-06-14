import React from 'react';

class GameJoin extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.gameID = null;
  }

  handleChange(event) {
    this.gameID = event.target.value;
  }

  handleClick() {
    event.preventDefault();
    var message = {"typ": "joi", "rom": this.gameID, "par": {}}
    console.log(JSON.stringify(message));
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
    return (
      <div>
        <label for="gameID">game ID</label>
        <input id="gameID" type="text" name="gameID" onChange={this.handleChange} />
        <button onClick={this.handleClick} className="btn btn-default">Join</button>
      </div>
    );
  }

}

export default GameJoin;
