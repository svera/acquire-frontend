import React from 'react';
import {render} from 'react-dom';
import GameCreate from './components/common/game_create.jsx';
import GameJoin from './components/common/game_join.jsx';
import Lobby from './components/common/lobby.jsx';
import Game from './components/acquire/game.jsx';
import ChangeLanguage from './components/common/change_language.jsx';
import {en} from './components/acquire/languages/en.js';
import {es} from './components/acquire/languages/es.js';
import Polyglot from 'node-polyglot';

const HOME = 0
const LOBBY = 1
const GAME = 2

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        screen: 0,
        game: '',
        gameID: '',
        players: [],
        status: null,
      };
      if (!localStorage.getItem('language')) {
        localStorage.setItem('language', 'en');
      }
      this.polyglot = new Polyglot();
      this.polyglot.extend(en);
      this.polyglot.extend(es);

      this.conn = new WebSocket('ws://localhost:8001');

      this.conn.onmessage = (e) => {
        this.parseMessage(e.data);
      }

      this.conn.onerror = (e) => {
        sessionStorage.setItem('info', 'Error connecting to server');
        this.setState({
          screen: HOME
        });
      }

      this.conn.onclose = (e) => {
        sessionStorage.setItem('info', this.polyglot.t(localStorage.getItem('language') + ".connection_lost"));
        this.setState({
          screen: HOME
        });
      }
    }

    parseMessage(data) {
      var msg = JSON.parse(data);
      switch (msg.typ) {
        case "out":
          if (msg.rea == 'ter') {
            sessionStorage.setItem('info', 'Game terminated by owner');
          }
          if (msg.rea == 'kck') {
            sessionStorage.setItem('info', 'You have been kicked out of the game by its owner');
          }
          if (msg.rea == 'tim') {
            sessionStorage.setItem('info', 'Room timed out');
          }
          if (msg.rea == 'qui') {
            sessionStorage.setItem('info', 'You have left the room');
          }
          this.setState({
            screen: HOME,
          });
          break;
        case "err":
          console.log(msg.cnt);
          break;

        case "new":
          sessionStorage.setItem('role', 'mng');
          this.setState({
            screen: LOBBY,
            gameID: msg.id
          });
          break;
          /*
        case "ack":
          this.setState({
            screen: LOBBY,
            gameID: msg.id
          });
          break;
          */
        case "pls":
          if (this.state.screen == HOME || this.state.screen == LOBBY) {
            this.setState({
              screen: LOBBY,
              players: msg.val
            });
          }
          break;
        case "ctl":
          sessionStorage.setItem('role', msg.rol);
          break;
        case "upd":
          console.log(msg);
          this.setState({
            screen: GAME,
            game: 'acquire',
            status: msg,
          });
          break;
      }
    }

  render() {
    switch (this.state.screen) {
      case HOME:
        var info = sessionStorage.getItem('info');
        sessionStorage.setItem('info', '');
        return (
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-lg-offset-3 text-center">
                <div className={info ? 'alert alert-warning' : 'hide'}>
                  {info}
                </div>
                <ChangeLanguage />
                <GameCreate conn={this.conn} gameName="acquire" />
                <GameJoin conn={this.conn} />
              </div>
            </div>
          </div>
        );
      case LOBBY:
        return (<Lobby gameID={this.state.gameID} players={this.state.players} conn={this.conn} />);
      case GAME:
        return (<Game conn={this.conn} status={this.state.status} />);
    }
  }

}

render(<App/>, document.getElementById('root'));
