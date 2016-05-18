import React from 'react';

class GameDestroy extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    $.post(
      "http://localhost:8001/destroy",
      {id: this.props.gameID}
    );
  }

  render() {
    if (sessionStorage.getItem('role') == 'mng') {
      return (
        <button onClick={this.handleClick} className="btn btn-default">Cancel</button>
      );
    }
    return null;
  }

}

export default GameDestroy;
