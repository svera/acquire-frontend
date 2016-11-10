import React from 'react';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';

class Cell extends React.Component {

  render() {
    if (this.props.owner == 'empty' || this.props.owner == 'unincorporated') {
      return (
        <g>
          <rect x={this.props.x} y={this.props.y} width={this.props.width} height={this.props.height} rx={this.props.radius} ry={this.props.radius} className={this.props.owner} />
        </g>
      );
    } else {
      var placement = "bottom";
      if (this.props.letterPosition > 4) {
        placement = "top";
      }
      return (
        <g>
          <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={this.buildPopover()} placement={placement}>
            <rect x={this.props.x} y={this.props.y} width={this.props.width} height={this.props.height} rx={this.props.radius} ry={this.props.radius} className={"c"+this.props.owner} />
          </OverlayTrigger>
        </g>
      );
    }
  }

  buildPopover() {
    return (
      <Popover id="popover" title={this.props.corps[this.props.owner].nam}>
        <p className="small"><strong>{this.props.translator("game.size")}:</strong> {this.props.corps[this.props.owner].siz}</p>
        <p className="small"><strong>{this.props.translator("game.price")}:</strong> {this.props.corps[this.props.owner].prc}</p>
        <p className="small"><strong>{this.props.translator("game.majority_bonus")}:</strong> {this.props.corps[this.props.owner].maj}</p>
        <p className="small"><strong>{this.props.translator("game.minority_bonus")}:</strong> {this.props.corps[this.props.owner].min}</p>
        <p className="small"><strong>{this.props.translator("game.remaining_stock")}:</strong> {this.props.corps[this.props.owner].rem}</p>
      </Popover>
    )
  }

}

export default Cell;
