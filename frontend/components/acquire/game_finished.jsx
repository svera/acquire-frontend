import React from 'react';
import GameDestroy from '../common/game_destroy.jsx';
import Modal from 'react-bootstrap/lib/Modal';

class GameFinished extends React.Component {

  getClassification() {
    var playersList = this.props.rivalsInfo;
    playersList.push(this.props.playerInfo);
    var keysSorted = Object.keys(playersList).sort(function(a,b){return playersList[a].csh-playersList[b].csh});
    var classification = [];
    for (var key in keysSorted) {
      classification.push(
        <li key={"classification-"+key}>
          {playersList[key].nam} - {playersList[key].csh}
        </li>
      );
    }
    return classification;
  }

  render() {
        var classification = this.getClassification();

        return (
          <Modal show={true}>
            <Modal.Header>
              <Modal.Title>{this.props.translator("game.ended")}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <ol>
                {classification}
              </ol>
            </Modal.Body>

            <Modal.Footer>
              <GameDestroy conn={this.props.conn} term={this.props.translator("back")}/>
            </Modal.Footer>
          </Modal>
        );
    }

}

export default GameFinished;
