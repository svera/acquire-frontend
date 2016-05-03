import React from 'react';

class PlayerInfobox extends React.Component {

  render() {
      return (
        <table className="table">
              <thead>
                  <tr>
                      <th>Cash</th>
                      <th>Sackson</th>
                      <th>Zeta</th>
                      <th>Hydra</th>
                      <th>Fusion</th>
                      <th>America</th>
                      <th>Phoenix</th>
                      <th>Quantum</th>
                  </tr>
              </thead>
              <tbody>
              <tr>
                <td>{this.props.playerInfo.csh}</td>
                <td>{this.props.playerInfo.own[0]}</td>
                <td>{this.props.playerInfo.own[1]}</td>
                <td>{this.props.playerInfo.own[2]}</td>
                <td>{this.props.playerInfo.own[3]}</td>
                <td>{this.props.playerInfo.own[4]}</td>
                <td>{this.props.playerInfo.own[5]}</td>
                <td>{this.props.playerInfo.own[6]}</td>
              </tr>
            </tbody>
        </table>
      );
  }

}

export default PlayerInfobox;
