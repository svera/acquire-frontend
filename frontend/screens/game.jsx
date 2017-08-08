import React from 'react';
import Board from '../components/board.jsx';
import PlayerInfobox from '../components/player_infobox.jsx';
import ContextMenu from '../components/context_menu.jsx';
import InsufficientPlayers from '../components/insufficient_players.jsx'
import GameFinished from '../components/game_finished.jsx'
import History from '../components/history.jsx'
import GameLeave from '../components/game_leave.jsx';
import GameDestroy from '../components/game_destroy.jsx';
import Sidebar from '../components/sidebar.jsx';
import Instructions from '../components/instructions.jsx';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class Game extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        endGameClaimSuccess: false,
        isVisible: false
      }
  }

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

  successMessage() {
    // Is last round and game end was not claimed already?
    if (this.props.status.lst && !this.state.endGameClaimSuccess) {
      this.state.endGameClaimSucces = true;
      return 'end_game_claimed';
    }
    return '';
  }

  updateModal(isVisible) {
    this.setState({isVisible: isVisible});
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
              <Col sm={7}>
                <Board width="576" height="432" spacing="2" originX="0" originY="0" radius="0" board={this.props.status.brd} state={this.props.status.sta} hand={this.props.status.hnd} corps={this.props.status.cor} conn={this.props.conn} translator={this.props.translator} />
              </Col>
              <Col sm={5}>
                <ContextMenu conn={this.props.conn} status={this.props.status} error={this.props.error} success={this.successMessage()} translator={this.props.translator} />
                <PlayerInfobox playerInfo={this.props.status.ply} rivalsInfo={this.props.status.riv} corps={this.props.status.cor} translator={this.props.translator} />
                <Button onClick={ () => this.updateModal(true) }>Display Modal Dialog</Button>
                <Sidebar side="left" title="How to play" isVisible={ this.state.isVisible } onHide={ () => this.updateModal(false) }>
                  <Instructions />
                </Sidebar>                
              </Col>
            </Row>
            <Row>
              <Col sm={7}>
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
