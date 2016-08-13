import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

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
        newCont += this.props.translator(content.log[i].key, content.log[i].arg) + "\n";
      }
    }
    return newCont;
  }

  render() {
      return (
        <Row>
          <Col xs={12}>
            <textarea readOnly="readOnly" rows="10" style={{width: '100%'}} value={this.state.cont} className="hidden-xs"></textarea>
          </Col>
        </Row>
      );
  }

}

export default History;
