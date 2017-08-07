import React from 'react';
import Badge from 'react-bootstrap/lib/Badge';
import Timer from 'timer.js';

SHOW_TIME_ALERT_IF_LESS_THAN = 11;

class PlayerInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: sessionStorage.getItem('timeout'),
    };
    this.timer = new Timer({
        tick: 1,
        onstart: function(millisec) {
          this.setState({
            time: Math.round(millisec / 1000)
          });
        }.bind(this),
        ontick: function(millisec) {
          this.setState({
            time: Math.round(millisec / 1000)
          });
        }.bind(this),
      });
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.player.trn && this.timer.getStatus() == 'started') {
      this.timer.stop();
    } else if (nextProps.player.trn && this.timer.getStatus() != 'started') {
      this.timer.start(sessionStorage.getItem('timeout'));
    }
  }

  componentDidMount() {
    if (this.props.player.trn) {
        this.timer.start(sessionStorage.getItem('timeout'));
    }
  }

  componentWillUnmount() {
    this.timer.stop();
    sessionStorage.setItem('timeout', 0);
  }

  render() {
    return (
      <span style={{whiteSpace: "nowrap"}}>
        { this.state.time > 0 && this.state.time < SHOW_TIME_ALERT_IF_LESS_THAN ? this.props.translator('game.time_left', {'time': this.state.time}) : null }
      </span>
    );
  }

}

export default PlayerInfo;
