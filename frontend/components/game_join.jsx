import React from 'react';
import $ from 'jquery';

class GameJoin extends React.Component {

  constructor(props) {
    super(props);
    this.onJoin = this.onJoin.bind(this);
  }

  onJoin () {
    this.props.callbackParent($('#gameID').val());
  }

  render() {
    return (
      <div>
        <label for="gameID">game ID</label>
        <input id="gameID" type="text" name="gameID" />
        <button onClick={this.onJoin} className="btn btn-default">Join</button>
      </div>
    );
  }

}

export default GameJoin;
