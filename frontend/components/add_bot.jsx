import React from 'react';

class AddBot extends React.Component {

  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.bot = "random";
  }

  onClickHandler () {
    var message = {"typ": "bot", "par": {"nam": this.bot}}
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  onChangeHandler(event) {
    this.bot = event.target.value;
  }

  render() {
    return (
      <div>
        <select name="bot" onChange={this.onChangeHandler}>
          <option value="random">Random</option>
        </select>
        <button onClick={this.onClickHandler} className="btn btn-default">Add bot</button>
      </div>
    );
  }

}

export default AddBot;
