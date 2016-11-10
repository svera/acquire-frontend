import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class InsufficientPlayers extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    var message = {"typ": "qui", "par": {"ply": "slf"}}
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
    return (
      <Modal show={true}>
        <Modal.Header>
          <Modal.Title>{this.props.translator("game.insufficient_players.title")}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {this.props.translator("game.insufficient_players.body")}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.handleClick} bsStyle="primary" className="pull-right">
            {this.props.translator("back")}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

}

export default InsufficientPlayers;
