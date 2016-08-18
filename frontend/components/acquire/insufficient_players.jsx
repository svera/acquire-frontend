import React from 'react';
import GameDestroy from '../common/game_destroy.jsx';
import Modal from 'react-bootstrap/lib/Modal';

class InsufficientPlayers extends React.Component {

  render() {
    return (
      <Modal show={true}>
        <Modal.Header>
          <Modal.Title>{this.props.translator("insufficient_players.title")}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {this.props.translator("insufficient_players.body")}
        </Modal.Body>

        <Modal.Footer>
          <GameDestroy conn={this.props.conn} term={this.props.translator("back")}/>
        </Modal.Footer>
      </Modal>
    );
  }


}

export default InsufficientPlayers;
