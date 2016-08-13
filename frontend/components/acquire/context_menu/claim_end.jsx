import React from 'react';
import Button from 'react-bootstrap/lib/Button';

class ClaimEnd extends React.Component {

  constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    var message =  {"typ": "end", "par": {}};
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
      return (
          <Button className="btn btn-default pull-right" bsSize="small" onClick={this.onClick}>
            {this.props.translator("game.claim_end")}
          </Button>
      );
  }

}

export default ClaimEnd;
