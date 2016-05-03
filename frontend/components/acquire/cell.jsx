import React from 'react';

class Cell extends React.Component {

  render() {
    return (
      <g>
        <rect x={this.props.x} y={this.props.y} width={this.props.size} height={this.props.size} className={this.props.owner} />
        <text x={this.props.x} y={this.props.y+(this.props.size / 2)} fontSize={24} style={{fill: "#cccccc"}}>{this.props.coords}</text>
      </g>
    );
  }

}

export default Cell;
