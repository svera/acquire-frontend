import React from 'react';

class ClaimEnd extends React.Component {

  constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();      
    var message =  {"typ": "end", "par": {}};
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
      return (
          <a href="#" className="pull-right" onClick={this.onClick} title={this.props.translator("game.claim_end")}>
            <i className="fa fa-trophy fa-lg"></i>
          </a>
      );
  }

}

export default ClaimEnd;
