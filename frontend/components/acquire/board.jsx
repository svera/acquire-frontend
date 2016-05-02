import React from 'react';
import Cell from './cell.jsx';
import Tile from './tile.jsx';

const COLUMNS = 12;
const ROWS = 9;

class Board extends React.Component {
  render() {
    var grid = [];
    var cellSize = parseInt(this.props.cellSize);
    var originX = parseInt(this.props.originX);
    var originY = parseInt(this.props.originY);
    var letters = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8 };

    for (var i = 0; i < 12; i++) {
      for (var letter in letters) {
        if (letters.hasOwnProperty(letter)) {
          var coords = (i+1)+letter;
          var j = letters[letter];
          grid.push(
            <Cell x={originX+(cellSize*i)} y={originY+(cellSize*j)} size={cellSize} key={"grid-"+i+"-"+j} coords={coords} />
          );
          if (coords in this.props.hand) {
            grid.push(
              <Tile x={originX+(cellSize*i)} y={originY+(cellSize*j)} size={cellSize} key={"tile-"+i+"-"+j} coords={coords} conn={this.props.conn} />
            )
          }
        }
      }
    }
    return (
      <svg width={originX+(cellSize*COLUMNS)} height={originY+(cellSize*ROWS)}>
        {grid}
      </svg>
    );
  }

}

export default Board;
