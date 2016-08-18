import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ClaimEnd from './claim_end.jsx';

class ContextMenuHeader extends React.Component {

  render() {
    return (
      <Row>
        <Col xs={9}>
          <p>{this.props.translator(this.props.text)}</p>
        </Col>
        <Col xs={3}>
          <ClaimEnd conn={this.props.conn} translator={this.props.translator} />
        </Col>
      </Row>
    );
  }

}

export default ContextMenuHeader;
