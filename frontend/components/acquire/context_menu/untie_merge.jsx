import React from 'react';
import ClaimEnd from './claim_end.jsx';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';

class UntieMerge extends React.Component {

  constructor(props) {
      super(props);
      this.handleClickUntie = this.handleClickUntie.bind(this);
      this.handleClickCorp = this.handleClickCorp.bind(this);

      this.corp = null;
  }

  handleClickCorp(event) {
    this.corp = parseInt(event.target.value)
  }

  handleClickUntie() {
    var message = {"typ": "unt", "par": {"cor": this.corp}};
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
      var selectableCorps = [];
      for (var i = 0; i < this.props.corps.length; i++) {
          selectableCorps.push(
            <Button value={i} onClick={this.handleClickCorp}>
              {this.props.corps[i]}
            </Button>
          );
      }
      return (
        <div>
          <p>{this.props.translator("game.untie_merge_title")}</p>
          <ButtonGroup>
            {selectableCorps}
          </ButtonGroup>
          <Button bsStyle="primary" onClick={this.handleClickUntie}>
            {this.props.translator("game.untie_merge")}
          </Button>
          <ClaimEnd conn={this.props.conn} translator={this.props.translator} />
        </div>
      );
  }

}

export default UntieMerge;
