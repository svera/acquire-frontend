import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ClaimEnd from './claim_end.jsx';

class PlayTile extends React.Component {

  render() {
      return (
        <Row>
          <Col xs={9}>
            {this.props.translator("game.play_tile")}
          </Col>
          <Col xs={3}>
            <ClaimEnd conn={this.props.conn} translator={this.props.translator} />
          </Col>
        </Row>
      );
  }

}

export default PlayTile;
