import React from 'react';
import {render} from 'react-dom';
import GameSelector from './components/game_selector.jsx';
import GameJoin from './components/game_join.jsx';
import Lobby from './components/lobby.jsx';

const HOME = 0
const LOBBY = 1
const GAME = 2

class App extends React.Component {
  constructor(props) {
      super(props);
      this.onGameCreated = this.onGameCreated.bind(this);
      this.onGameJoinError = this.onGameJoinError.bind(this);
      this.onStartGame = this.onStartGame.bind(this);
      this.state = {
        screen: 0,
        game: '',
        gameID: ''
      };
    }

  onGameCreated(ID) {
    this.setState({
      screen: LOBBY,
      gameID: ID
    });
  }

  onGameJoinError() {
    console.log("Error joining game");
    this.setState({
      screen: HOME
    });
  }

  onStartGame() {
    this.setState({
      screen: GAME,
      game: 'acquire'
    });
  }

  render() {
    switch (this.state.screen) {
      case HOME:
        return (
          <div>
            <GameSelector callbackParent={this.onGameCreated}/>
            <GameJoin callbackParent={this.onGameCreated}/>
          </div>
        );
      case LOBBY:
        return (<Lobby gameID={this.state.gameID} gameJoinErrorCallback={this.onGameJoinError} startGameCallback={this.onStartGame} />);
      case GAME:
        return (<div>Start game</div>);
    }
  }

}

render(<App/>, document.getElementById('root'));
