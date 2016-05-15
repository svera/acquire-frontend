import React from 'react';

class Cell extends React.Component {

  render() {
    return (
      <g>
        <rect x={this.props.x} y={this.props.y} width={this.props.width} height={this.props.height} rx={this.props.radius} ry={this.props.radius} className={this.props.owner} />
      </g>
    );
  }

}

export default Cell;
