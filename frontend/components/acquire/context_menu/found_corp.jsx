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
              <p>You have founded a new corporation! Please choose one:</p>
              {this.foundableCorpsMarkup()}
          </div>
          <input type="button" className="btn btn-primary" value="Found corporation" onClick={this.handleClick} />
          <ClaimEnd conn={this.props.conn} />
        </div>
      );
  }

}

export default FoundCorp;
