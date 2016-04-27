import React from 'react';
import {render} from 'react-dom';
import GameSelector from './components/game_selector.jsx';
import Lobby from './components/lobby.jsx';

const HOME = 0
const LOBBY = 1

class App extends React.Component {
  constructor(props) {
      super(props);
      this.onGameCreated = this.onGameCreated.bind(this);
      this.state = {
        screen: 0,
        gameID: ''
      };
    }

  onGameCreated(ID) {
    this.setState({
      screen: LOBBY,
      gameID: ID
    });
  }

  render() {
    switch (this.state.screen) {
      case HOME:
        return (<GameSelector callbackParent={this.onGameCreated}/>);
      case LOBBY:
        return (<Lobby gameID={this.state.gameID} />);
    }
  }

}

render(<App/>, document.getElementById('root'));
