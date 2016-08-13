import React from 'react';
import GameCreate from './game_create.jsx';
import GameJoin from './game_join.jsx';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';


class Home extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        language: this.props.language,
      };
      this.onClickLanguage = this.onClickLanguage.bind(this);
  }

  onClickLanguage(eventKey) {
    localStorage.setItem('language', eventKey);
    this.setState({language: eventKey})
  }

  render() {
    var info = sessionStorage.getItem('info');
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Acquire</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight onSelect={this.onClickLanguage}>
              <NavItem href="#" eventKey="en">English</NavItem>
              <NavItem href="#" eventKey="es">Español</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="container">
            <div className={info ? 'alert alert-warning' : 'hide'}>
              {info}
            </div>

            <h1 className="cover-heading">Cover your page.</h1>
            <p className="lead">Lorem ipsum dolor sit amet.</p>
            <GameCreate conn={this.props.conn} gameName="acquire" text={this.props.translator('create_game')} />
            <GameJoin conn={this.props.conn} text={this.props.translator('join')} />
        </div>
      </div>
    );
  }

}

export default Home;
