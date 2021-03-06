import React from 'react';

class Tile extends React.Component {

  texture() {
    return (
    <defs id="defs">
        <pattern id="tile-texture" x="0" y="0" width="1" height="1">
            <image x="0" y="0" width={this.props.width+"px"} height={this.props.height+"px"} xlinkHref="img/tile.jpg" />
        </pattern>
    </defs>
    );
  }
  
  constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }

  onClick() {
    var message = {"typ": "ply", "cnt": {"til": this.props.coords}}
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  unplayableIconMarkup() {
    if (!this.props.playable) {
      return (
        <g>
          <line x1={this.props.x+10} y1={this.props.y+10} x2={this.props.x+this.props.width-10} y2={this.props.y+this.props.height-10} style={{stroke: "red", strokeWidth: 4}} />
          <line x1={this.props.x+this.props.width-10} y1={this.props.y+10} x2={this.props.x+10} y2={this.props.y+this.props.height-10} style={{stroke: "red", strokeWidth: 4}} />
        </g>
      );
    }
    return null;
  }

  render() {
    return (
      <g>
        {this.texture()}
        <rect x={this.props.x} y={this.props.y} width={this.props.width} height={this.props.height} rx={this.props.radius} ry={this.props.radius} className="tile" onClick={this.onClick} />
        {this.unplayableIconMarkup()}
      </g>
    );
  }

}

export default Tile;
