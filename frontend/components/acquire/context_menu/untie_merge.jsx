import React from 'react';
import ClaimEnd from './claim_end.jsx';

class UntieMerge extends React.Component {

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);

      this.corp = null;
  }

  handleChange(event) {
    this.corp = parseInt(event.target.value)
  }

  handleClick() {
    var message = {"typ": "unt", "par": {"cor": this.corp}};
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
      var selectableCorps = [];
      for (var i = 0; i < this.props.corps.length; i++) {
          selectableCorps.push(
            <label className="btn btn-default" key={"untie-"+i}>
                <input type="radio" name="corps" value={i} onChange={this.handleChange}/>&nbsp;
                <span>{this.props.corps[i]}</span>
            </label>
          );
      }
      return (
        <div>
          <div className="btn-group" role="group" dataToggle="buttons">
              <p>{this.props.translator("game.untie_merge_title")}</p>
              {selectableCorps}
          </div>
          <input type="button" className="btn btn-primary" value={this.props.translator("game.untie_merge")} onClick={this.handleClick} />
          <ClaimEnd conn={this.props.conn} translator={this.props.translator} />
        </div>
      );
  }

}

export default UntieMerge;
