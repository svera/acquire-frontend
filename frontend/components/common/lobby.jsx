import React from 'react';
import PlayerList from './player_list.jsx';
import AddBot from './add_bot.jsx';
import StartGame from './start_game.jsx';
import GameDestroy from './game_destroy.jsx';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

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
        <div>
          <Grid>
            <Row>
              <Col md={12}>
                <AddBot conn={this.props.conn} text={this.props.translator('lobby.add_bot')} />
              </Col>
            </Row>
          </Grid>
          <Row style={{marginTop: "10px"}}>
            <Col md={12}>
              <ButtonToolbar>
                  <StartGame conn={this.props.conn} text={this.props.translator('lobby.start_game')} />
                  <GameDestroy conn={this.props.conn} text={this.props.translator('cancel')} />
              </ButtonToolbar>
            </Col>
          </Row>
        </div>
      );
    }
    return (
      <Grid>
        <h2>{this.props.translator('lobby.title', {'gameID': this.props.gameID})}</h2>
        <h3>{this.props.translator('lobby.connected_players')}</h3>
            <PlayerList players={this.props.players} conn={this.props.conn} translator={this.props.translator} />
        {restrictedItems}
      </Grid>
    );
  }

}

export default Lobby;
