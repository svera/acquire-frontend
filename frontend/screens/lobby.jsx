import React from 'react';
import PlayerName from '../components/player_name.jsx';
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
import Panel from 'react-bootstrap/lib/Panel';

class Lobby extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        players: [],
        gameParams: {
          playerTimeout: 0
        }
      };
      this.handlePlayerTimeoutChange = this.handlePlayerTimeoutChange.bind(this);
  }

  handlePlayerTimeoutChange(event) {
    this.setState({
      gameParams: {
        playerTimeout: parseInt(event.target.value)
      }
    });
  }

  render() {
    if (sessionStorage.getItem('role') == 'mng') {
      var addBot = (
        <ButtonToolbar>
          <AddBot conn={this.props.conn} players={this.props.players} translator={this.props.translator} />
        </ButtonToolbar>
      );
      var gameOptions = (
        <Col xs={12} sm={6}>
          <h3>{this.props.translator('lobby.game_options')}</h3>        
          <Panel>
            <form>
                <FormGroup>
                  <label>
                    {this.props.translator('home.player_time_limit')}
                    <FormControl name="player-time" componentClass="select" onChange={this.handlePlayerTimeoutChange}>
                        <option value="0" key={"player-time-0"}>{this.props.translator('no_limit')}</option>
                        <option value="15" key={"player-time-15"}>{this.props.translator('x_seconds', {"number": 15})}</option>
                        <option value="30" key={"player-time-30"}>{this.props.translator('x_seconds', {"number": 30})}</option>
                        <option value="45" key={"player-time-45"}>{this.props.translator('x_seconds', {"number": 45})}</option>
                        <option value="60" key={"player-time-60"}>{this.props.translator('one_minute')}</option>
                    </FormControl>
                  </label>
                </FormGroup>
            </form>
            <ButtonToolbar>
              <StartGame conn={this.props.conn} players={this.props.players} translator={this.props.translator} gameParams={this.state.gameParams} />
            </ButtonToolbar>
          </Panel>
        </Col>
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
          <Row>
              {gameOptions}

              <Col xs={12} sm={6}>
                <h3>{this.props.translator('lobby.connected_players')}</h3>
                <PlayerName conn={this.props.conn} translator={this.props.translator} />
                <PlayerList players={this.props.players} conn={this.props.conn} translator={this.props.translator} />
                {addBot}
              </Col>

          </Row>
        </Grid>
      </div>
    );
  }

}

export default Lobby;
