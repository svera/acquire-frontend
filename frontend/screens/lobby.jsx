import React from 'react';
import PlayerList from '../components/player_list.jsx';
import AddBot from '../components/add_bot.jsx';
import StartGame from '../components/start_game.jsx';
import GameLeave from '../components/game_leave.jsx';
import GameDestroy from '../components/game_destroy.jsx';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

class Lobby extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        players: []
      };
  }

  render() {
    if (sessionStorage.getItem('role') == 'mng') {
      var restrictedItems = (
        <Row>
          <Col xs={12}>
            <ButtonToolbar>
              <AddBot conn={this.props.conn} translator={this.props.translator} />
              <StartGame conn={this.props.conn} players={this.props.players} translator={this.props.translator} />
            </ButtonToolbar>
          </Col>
        </Row>
      );
    }
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
          <h2>{this.props.translator('lobby.title', {'gameID': this.props.gameID})}</h2>
          <h3>{this.props.translator('lobby.connected_players')}</h3>
          <Row>
            <Col xs={12} sm={4}>
              <PlayerList players={this.props.players} conn={this.props.conn} translator={this.props.translator} />
            </Col>
          </Row>
          {restrictedItems}
        </Grid>
      </div>
    );
  }

}

export default Lobby;
