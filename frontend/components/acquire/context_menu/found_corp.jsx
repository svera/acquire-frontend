import React from 'react';

class FoundCorp extends React.Component {

  constructor(props) {
      super(props);
    }


  render() {
      var selectableCorps = [];
      for (var i = 0; i < this.props.corps.length; i++) {
          if (this.props.corps[i].siz == 0) {
            selectableCorps.push(
              <label class="btn btn-default" key={"found-corp-"+i}>
                  <input type="radio" name="corps" value={this.props.corps[i].nam.toLowerCase()} />
                  <span>{this.props.corps[i].nam}</span>
              </label>
            );
          }
      }
      return (
        <div>
          <div class="btn-group" role="group" aria-label="..." data-toggle="buttons">
              <p>You have founded a new corporation! Please choose one:</p>
              {selectableCorps}
          </div>
          <input type="button" id="newCorpButton" class="btn btn-primary" value="Found corporation"/>
          <input type="button" id="claimEndButton" class="btn" value="Claim game end" />
        </div>
      );
  }

}

export default FoundCorp;
