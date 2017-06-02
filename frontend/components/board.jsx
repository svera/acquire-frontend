import React from 'react';
import Cell from './cell.jsx';
import Tile from './tile.jsx';

const COLUMNS = 12;
const ROWS = 9;

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.spacing = parseInt(this.props.spacing);
    this.width = parseInt(this.props.width);
    this.height = parseInt(this.props.height);
    this.gridWith = this.width - this.spacing;
    this.gridHeight = this.height - this.spacing;
    this.cellWidth = (this.gridWith / 12)-this.spacing;
    this.cellHeight = (this.gridHeight / 9)-this.spacing;
  }

  render() {
    var grid = [];
    var originX = parseInt(this.props.originX);
    var originY = parseInt(this.props.originY);
    var letters = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8 };
    var curtain = '';

    for (var i = 0; i < 12; i++) {
      for (var letter in letters) {
        if (letters.hasOwnProperty(letter)) {
          var coords = (i+1)+letter;
          var j = letters[letter];
          var x = originX+(this.cellWidth*i)+(this.spacing*(i+1));
          var y = originY+(this.cellWidth*j)+(this.spacing*(j+1));
          grid.push(
            <Cell x={x} y={y} width={this.cellWidth} height={this.cellHeight} radius={this.props.radius} key={"grid-"+i+"-"+j} owner={this.props.board[coords]} corps={this.props.corps} translator={this.props.translator} letterPosition={j} />
          );

          if (coords in this.props.hand) {
            grid.push(
              <Tile x={x} y={y} width={this.cellWidth} height={this.cellHeight} radius={this.props.radius} key={"tile-"+i+"-"+j} coords={coords} conn={this.props.conn} playable={this.props.hand[coords]} />
            )
          }

        }
      }
    }

    if (this.props.state != 'PlayTile') {
      curtain = <rect id={"curtain"} width={this.width} height={this.height} rx={this.props.radius} ry={this.props.radius} />;
    } else {
      curtain = '';
    }

    var viewBox = "0 0 "+(originX+this.width)+" "+originX+this.height;
    return (
      <svg viewBox={viewBox}>
        <rect width={this.width} height={this.height} id="board" rx={this.props.radius} ry={this.props.radius} />
        {grid}
        {curtain}
      </svg>
    );
  }

}

export default Board;
