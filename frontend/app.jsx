import React from 'react';
import {render} from 'react-dom';
import GameCreate from './components/common/game_create.jsx';
import GameJoin from './components/common/game_join.jsx';
import Lobby from './components/common/lobby.jsx';
import Game from './components/acquire/game.jsx';
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
        language: this.initLanguages(),
      };

      sessionStorage.setItem('info', '');
      this.conn = new WebSocket('ws://localhost:8001');

      this.conn.onmessage = (e) => {
        this.parseMessage(e.data);
      }

      this.conn.onclose = (e) => {
        sessionStorage.setItem('info', this.t("connection_lost"));
        this.setState({
          screen: HOME
        });
      }

      this.conn.onerror = (e) => {
        sessionStorage.setItem('info', this.t("connection_error"));
        this.setState({
          screen: HOME
        });
      }

      this.onChangeLanguage = this.onChangeLanguage.bind(this);
      this.t = this.t.bind(this);
    }

    initLanguages() {
      if (!localStorage.getItem('language')) {
        localStorage.setItem('language', 'en');
      }
      this.polyglot = new Polyglot();
      this.polyglot.extend(en);
      this.polyglot.extend(es);
      return localStorage.getItem('language');
    }

    // Return the translation for the passed key in the current language
    t(key, values) {
      return this.polyglot.t(this.state.language + "." + key, values);
    }

    parseMessage(data) {
      var msg = JSON.parse(data);
      switch (msg.typ) {
        case "out":
          if (msg.rea == 'ter') {
            sessionStorage.setItem('info', this.t("game_terminated"));
          }
          if (msg.rea == 'kck') {
            sessionStorage.setItem('info', this.t("kicked"));
          }
          if (msg.rea == 'tim') {
            sessionStorage.setItem('info', this.t("room_timed_out"));
          }
          if (msg.rea == 'qui') {
            sessionStorage.setItem('info', this.t("left_room"));
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

  onChangeLanguage(event) {
    localStorage.setItem('language', event.target.value);
    this.setState({language: event.target.value})
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
                <select onChange={this.onChangeLanguage} value={this.state.language}>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>
                <GameCreate conn={this.conn} gameName="acquire" text={this.t('create_game')} />
                <GameJoin conn={this.conn} />
              </div>
            </div>
          </div>
        );
      case LOBBY:
        return (<Lobby gameID={this.state.gameID} players={this.state.players} conn={this.conn} translator={this.t} />);
      case GAME:
        return (<Game conn={this.conn} status={this.state.status} />);
    }
  }

}

render(<App/>, document.getElementById('root'));
