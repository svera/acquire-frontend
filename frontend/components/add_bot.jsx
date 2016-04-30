import React from 'react';

class AddBot extends React.Component {

  constructor(props) {
    super(props);
    this.onAddBot = this.onAddBot.bind(this);
  }

  onAddBot () {
    var message = {"typ": "bot", "par": "add"}
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
    return (
      <button onClick={this.onAddBot} className="btn btn-default">Add bot</button>
    );
  }

}

export default AddBot;
