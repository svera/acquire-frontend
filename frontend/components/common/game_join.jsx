import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

class GameJoin extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    var gameID = event.currentTarget.dataset.gameid;
    event.preventDefault();
    console.log(event.currentTarget.dataset.gameid);
    var message = {"typ": "joi", "par": {"rom": gameID}}
    console.log(JSON.stringify(message));
    this.props.conn.send(
        JSON.stringify(message)
    );
  }

  render() {
    var self = this
    if (this.props.rooms.length == 0) {
      return (
        <p>No Rooms currently available to join</p>
      )
    }
    return (
      <ListGroup>
        {
          this.props.rooms.map(function(room) {
            return (
              <ListGroupItem key={room}>
                {room}
                <a href="#" onClick={self.handleClick} data-gameid={room} className="pull-right">
                  {self.props.text}
                </a>
              </ListGroupItem>
            )
          })
        }
      </ListGroup>
    )
  }

}

export default GameJoin;
