import React from 'react';

class History extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        cont: this.addNewLogs(props)
      }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cont: this.state.cont + this.addNewLogs(nextProps)
    });
  }

  addNewLogs(content) {
    var newCont = "";
    if (content.log != null) {
      for (var i = 0; i < content.log.length; i++) {
        newCont += content.log[i]+"\n";
      }
    }
    return newCont;
  }

  render() {
      return (
        <textarea readOnly="readOnly" rows="10" style={{width: '100%'}} value={this.state.cont}></textarea>
      );
  }

}

export default History;
