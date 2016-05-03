import React from 'react';
import ClaimEnd from './claim_end.jsx';

class FoundCorp extends React.Component {

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);

      this.corp = null;
  }

  handleChange(event) {
    this.corp = event.target.value
  }

  handleClick() {
    var message = {"typ": "ncp", "par": {"cor": this.corp}};
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
      var selectableCorps = [];
      for (var i = 0; i < this.props.corps.length; i++) {
          if (this.props.corps[i].siz == 0) {
            selectableCorps.push(
              <label class="btn btn-default" key={"found-corp-"+i}>
                  <input type="radio" name="corps" value={this.props.corps[i].nam.toLowerCase()} onChange={this.handleChange}/>
                  <span>{this.props.corps[i].nam}</span>
              </label>
            );
          }
      }
      return (
        <div>
          <div class="btn-group" role="group" dataToggle="buttons">
              <p>You have founded a new corporation! Please choose one:</p>
              {selectableCorps}
          </div>
          <input type="button" class="btn btn-primary" value="Found corporation" onClick={this.handleClick} />
          <ClaimEnd conn={this.props.conn} />
        </div>
      );
  }

}

export default FoundCorp;
