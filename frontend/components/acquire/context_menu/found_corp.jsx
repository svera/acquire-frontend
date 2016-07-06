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
    console.log(event.target.value)
    this.corp = parseInt(event.target.value)
  }

  handleClick() {
    var message = {"typ": "ncp", "par": {"cor": this.corp}};
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  foundableCorpsMarkup() {
    var selectableCorps = [];
    for (var i = 0; i < this.props.corps.length; i++) {
        if (this.props.corps[i].siz == 0) {
          selectableCorps.push(
            <label className="btn btn-default" key={"found-corp-"+i}>
                <input type="radio" name="corps" value={i} onChange={this.handleChange}/>
                <span>{this.props.corps[i].nam}</span>
            </label>
          );
        }
    }
    return selectableCorps;
  }

  render() {
      return (
        <div>
          <div className="btn-group" role="group" data-toggle-not-working="buttons">
              <p>{this.props.translator("game.founded_corporation")}</p>
              {this.foundableCorpsMarkup()}
          </div>
          <input type="button" className="btn btn-primary" value={this.props.translator("game.found_corporation")} onClick={this.handleClick} />
          <ClaimEnd conn={this.props.conn} translator={this.props.translator} />
        </div>
      );
  }

}

export default FoundCorp;
