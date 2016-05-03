import React from 'react';

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
          <input type="button" class="btn" value="Claim game end" onClick={this.onClick} />
      );
  }

}

export default ClaimEnd;
