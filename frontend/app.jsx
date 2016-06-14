import React from 'react';
import {render} from 'react-dom';
import GameSelector from './components/common/game_selector.jsx';
import GameJoin from './components/common/game_join.jsx';
import Lobby from './components/common/lobby.jsx';
import Game from './components/acquire/game.jsx';

const HOME = 0
const LOBBY = 1
const GAME = 2

class App extends React.Component {
  constructor(props) {
      super(props);
      this.onGameJoinError = this.onGameJoinError.bind(this);
      this.state = {
        screen: 0,
        game: '',
        gameID: '',
        players: [],
      };
      this.conn = new WebSocket('ws://localhost:8001');

      this.conn.onmessage = (e) => {
        this.parseMessage(e.data);
      }

      this.conn.onerror = (e) => {
        this.props.gameJoinErrorCallback();
      }
      this.conn.onclose = (e) => {
        var message = null;
        switch (e.code) {
          case 4000:
            message = '';
            break;
          case 4001:
            message = 'Game terminated by owner';
            break;
          case 4002:
            message = 'You have exited from game';
            break;
          case 4003:
            message = 'You have been kicked out from game';
            break;
          case 4004:
            message = 'Game terminated due to time';
            break;
          default:
            message = 'Connection to server lost';
        }
        this.setState({
          screen: HOME
        });
        sessionStorage.setItem('info', message);
      }
    }

    parseMessage(data) {
      var msg = JSON.parse(data);
      switch (msg.typ) {
        case "err":
          console.log(msg.cnt);
          break;

        case "new":
          console.log(msg)
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
        console.log(msg)
          this.setState({
            screen: LOBBY,
            players: msg.val
          })
          break;
        case "ctl":
          sessionStorage.setItem('role', msg.rol);
          break;
        case "upd":
          this.setState({
            screen: GAME,
            game: 'acquire',
            initialStatus: msg
          });
          break;
      }
    }


  onGameJoinError() {
    console.log("Error joining game");
    this.setState({
      screen: HOME
    });
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
                <GameSelector conn={this.conn}/>
                <GameJoin conn={this.conn}/>
              </div>
            </div>
          </div>
        );
      case LOBBY:
        return (<Lobby gameID={this.state.gameID} players={this.state.players} conn={this.conn} />);
      case GAME:
        return (<Game gameID={this.state.gameID} conn={this.conn} status={this.state.initialStatus} connectionLostCallBack={this.onConnectionLost} />);
    }
  }

}

render(<App/>, document.getElementById('root'));
