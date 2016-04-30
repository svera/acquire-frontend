import React from 'react';

class Cell extends React.Component {

  render() {
    return (
      <rect x={this.props.x} y={this.props.y} width={this.props.size} height={this.props.size} style={{fill: "white", stroke: "black"}} />
    );
  }

}

export default Cell;
