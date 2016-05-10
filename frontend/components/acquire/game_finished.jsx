import React from 'react';

class GameFinished extends React.Component {

  render() {
        var playersList = this.props.rivalsInfo;
        playersList.push(this.props.playerInfo);
        var keysSorted = Object.keys(playersList).sort(function(a,b){return playersList[a].csh-playersList[b].csh});
        var classification = [];
        for (var key in keysSorted) {
          classification.push(
            <li key={"classification-"+key}>
              {playersList[key].nam} - {playersList[key].csh}
            </li>
          );
        }
        return (
          <div className="container">
            <h2>Game ended</h2>
            <ol>
              {classification}
            </ol>
          </div>
        )
    }


}

export default GameFinished;
