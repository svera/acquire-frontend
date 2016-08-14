import React from 'react';
import Board from './board.jsx';
import PlayerInfobox from './player_infobox.jsx';
import ContextMenu from './context_menu.jsx';
import GameFinished from './game_finished.jsx'
import History from './history.jsx'
import GameLeave from '../common/game_leave.jsx';
import GameDestroy from '../common/game_destroy.jsx';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Modal from 'react-bootstrap/lib/Modal';
import Panel from 'react-bootstrap/lib/Panel';

class Game extends React.Component {

  insufficientPlayers() {
    if (this.props.status.sta == 'InsufficientPlayers') {
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
      )
    }
  }

  render() {
    switch (this.props.status.sta) {
      case 'EndGame':
        return (
          <GameFinished playerInfo={this.props.status.ply} rivalsInfo={this.props.status.riv} conn={this.props.conn}/>
        );
        break;

      default:
        return (
          <div>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">Acquire</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <GameLeave conn={this.props.conn} text={this.props.translator("game.leave")}/>
                  <GameDestroy conn={this.props.conn} text={this.props.translator("game.terminate")} />
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Grid>
              <Row>
                <Col xs={12} sm={7}>
                  <PlayerInfobox playerInfo={this.props.status.ply} rivalsInfo={this.props.status.riv} corps={this.props.status.cor} translator={this.props.translator} />
                  <Board width="576" height="432" spacing="5" originX="0" originY="0" radius="3" board={this.props.status.brd} hand={this.props.status.hnd} corps={this.props.status.cor} conn={this.props.conn} translator={this.props.translator} />
                </Col>
                <Col xs={12} sm={5}>
                  <Panel>
                    <ContextMenu conn={this.props.conn} corps={this.props.status.cor} tiedCorps={this.props.status.tie} gameState={this.props.status.sta} playerInfo={this.props.status.ply} translator={this.props.translator} />
                  </Panel>
                  <History log={this.props.status.his} translator={this.props.translator} />
                </Col>
              </Row>
            </Grid>

            {this.insufficientPlayers()}
          </div>
        );
    }
  }

}

export default Game;
