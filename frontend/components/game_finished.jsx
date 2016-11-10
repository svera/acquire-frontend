import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class GameFinished extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });    
  }
  
  render() {
        var classification = this.getClassification();

        return (
          <Modal show={true}>
            <Modal.Header>
              <Modal.Title>{this.props.translator("game.finished.title")}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <ol>
                {classification}
              </ol>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.handleClick} bsStyle="primary" className="pull-right">
                {this.props.translator("back")}
              </Button>
            </Modal.Footer>
          </Modal>
        );
    }

    getClassification() {
      var playersList = this.props.rivalsInfo;
      playersList.push(this.props.playerInfo);
      var sorted = playersList.sort(this.compare);
      var classification = [];
      for (var key in sorted.reverse()) {
        classification.push(
          <li key={"classification-"+key}>
            {playersList[key].nam} - {this.formatter.format(playersList[key].csh)}
          </li>
        );
      }
      return classification;
    }

    compare(a,b) {
      if (a.csh < b.csh) {
        return -1;
      }
      if (a.csh > b.csh) {
        return 1;
      }
      return 0;
    }

    handleClick(event) {
      event.preventDefault();
      var message = {"typ": "qui", "par": {"ply": "slf"}}
      this.props.conn.send(
          JSON.stringify(message)
      );
    }
}

export default GameFinished;
