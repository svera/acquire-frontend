import React from 'react';
import Board from './board.jsx';
import PlayerInfobox from './player_infobox.jsx';
import ContextMenu from './context_menu.jsx';
import InsufficientPlayers from './insufficient_players.jsx'
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

class Game extends React.Component {

  insufficientPlayers() {
    if (this.props.status.sta == 'InsufficientPlayers') {
      return (
        <InsufficientPlayers conn={this.props.conn} translator={this.props.translator} />
      );
    }
  }

  gameFinished() {
    if (this.props.status.sta == 'EndGame') {
      return (
        <GameFinished playerInfo={this.props.status.ply} rivalsInfo={this.props.status.riv} conn={this.props.conn} translator={this.props.translator} />
      );
    }
  }

  render() {
      return (
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                {this.props.translator("game.turn", {"turnNumber": this.props.status.rnd})}
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
                <ContextMenu conn={this.props.conn} status={this.props.status} translator={this.props.translator} />
                <Board width="576" height="432" spacing="5" originX="0" originY="0" radius="3" board={this.props.status.brd} hand={this.props.status.hnd} corps={this.props.status.cor} conn={this.props.conn} translator={this.props.translator} />
              </Col>
              <Col xs={12} sm={5}>
                <PlayerInfobox playerInfo={this.props.status.ply} rivalsInfo={this.props.status.riv} corps={this.props.status.cor} translator={this.props.translator} />
                <History log={this.props.status.his} translator={this.props.translator} />
              </Col>
            </Row>
          </Grid>

          {this.insufficientPlayers()}
          {this.gameFinished()}
        </div>
      );
  }

}

export default Game;
