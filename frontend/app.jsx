import React from 'react';
import {render} from 'react-dom';
import Home from './components/common/home.jsx';
import Lobby from './components/common/lobby.jsx';
import Game from './components/acquire/game.jsx';
import {en} from './components/acquire/languages/en.js';
import {es} from './components/acquire/languages/es.js';
import Polyglot from 'node-polyglot';
import ReconnectingWebSocket from 'reconnecting-websocket';

const HOME = 0
const LOBBY = 1
const GAME = 2

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        screen: HOME,
        game: '',
        gameID: '',
        players: [],
        status: null,
        rooms: [],
      };

      this.initLanguages();
      sessionStorage.setItem('info', '');
      this.conn = new ReconnectingWebSocket('ws://localhost:8001');

      this.conn.onmessage = (e) => {
        this.parseMessage(e.data);
      }

      this.conn.onclose = (e) => {
        sessionStorage.setItem('info', this.t("connection_lost"));
        this.setState({
          screen: HOME
        });
      }

      this.conn.onopen = () => {
        sessionStorage.setItem('info', '');
        this.setState({
          screen: HOME
        });
      }

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
      return this.polyglot.t(localStorage.getItem('language') + "." + key, values);
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
        case "rms":
          console.log(msg);
          if (this.state.screen == HOME) {
            this.setState({
              rooms: msg.val
            })
          }
          break;
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
        return (<Home conn={this.conn} translator={this.t} language={localStorage.getItem('language')} rooms={this.state.rooms} />);
      case LOBBY:
        return (<Lobby gameID={this.state.gameID} players={this.state.players} conn={this.conn} translator={this.t} />);
      case GAME:
        return (<Game conn={this.conn} status={this.state.status} translator={this.t} />);
    }
  }

}

render(<App/>, document.getElementById('root'));
