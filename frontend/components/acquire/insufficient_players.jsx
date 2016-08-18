import React from 'react';
import GameDestroy from '../common/game_destroy.jsx';
import Modal from 'react-bootstrap/lib/Modal';

class InsufficientPlayers extends React.Component {

  render() {
    return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{this.props.translator("insufficient_players")}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          One fine body...
        </Modal.Body>

        <Modal.Footer>
        </Modal.Footer>

      </Modal.Dialog>
    );
  }


}

export default InsufficientPlayers;
