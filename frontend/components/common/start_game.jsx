import React from 'react';

class StartGame extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick () {
    var message = {"typ": "ini", "par": {}}
    console.log(JSON.stringify(message))
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
    return (
      <button onClick={this.onClick} className="btn btn-default">{this.props.text}</button>
    );
  }

}

export default StartGame;
