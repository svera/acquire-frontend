import React from 'react';
import $ from 'jquery';

const LOBBY = 1

class GameSelector extends React.Component {

  constructor(props) {
    super(props);
    this.onCreate = this.onCreate.bind(this);
  }

  onCreate () {
    var self = this
    $.post("http://localhost:8001/create",
            {game: "acquire"},
            function(data, status) {
              self.props.callbackParent(data);
                //window.location.replace("/"+data);
            }
          );
    }

  render() {
    return (
      <div>
        <select name="game">
          <option value="acquire">Acquire</option>
        </select>
        <button onClick={this.onCreate} className="btn btn-default">New game</button>
      </div>
    );
  }

}

export default GameSelector;
