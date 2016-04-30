import React from 'react';

class Tile extends React.Component {

  constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }

  onClick() {
    console.log(this.props.coords);
  }

  render() {
    return (
      <rect x={this.props.x} y={this.props.y} width={this.props.size} height={this.props.size} style={{fill: "black", stroke: "black", cursor: "pointer"}} onClick={this.onClick} />
    );
  }

}

export default Tile;
