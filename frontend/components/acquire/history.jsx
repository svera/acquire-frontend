import React from 'react';

class History extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        cont: ""
      }
  }

  historyContent() {
    if (this.props.log != null) {
      for (var i = 0; i < this.props.log.length; i++) {
        this.state.cont += "<p>"+this.props.log[i]+"</p>"
      }
      return this.state.cont
    }
  }

  render() {
      return (
        <div>{this.historyContent()}</div>
      );
  }

}

export default History;
