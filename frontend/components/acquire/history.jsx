import React from 'react';

class History extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        cont: ""
      }
  }

  componentWillReceiveProps(nextProps) {
    var newCont = "";
    if (nextProps.log != null) {
      for (var i = 0; i < nextProps.log.length; i++) {
        newCont += nextProps.log[i]+"\n";
      }
      this.setState({
        cont: this.state.cont + newCont
      });
    }
  }

  render() {
      return (
        <textarea readOnly="readOnly" rows="10" style={{width: '100%'}} value={this.state.cont}></textarea>
      );
  }

}

export default History;
