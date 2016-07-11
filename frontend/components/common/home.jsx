import React from 'react';
import GameCreate from './game_create.jsx';
import GameJoin from './game_join.jsx';

class Home extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        language: this.props.language,
      };
      this.onClickLanguage = this.onClickLanguage.bind(this);
  }

  onClickLanguage(event) {
    localStorage.setItem('language', event.target.value);
    this.setState({language: event.target.value})
  }

  render() {
    var info = sessionStorage.getItem('info');
    return (
      <div className="site-wrapper">

            <div className="site-wrapper-inner">

              <div className="cover-container">

                <div className="masthead clearfix">
                  <div className="inner">
                    <h3 className="masthead-brand">Acquire</h3>
                    <nav>
                      <ul className="nav masthead-nav">
                        <li><a onClick={this.onClickLanguage} href="#" value="en">English</a></li>
                        <li><a onClick={this.onClickLanguage} href="#" value="es">Español</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="inner cover">
                  <div className={info ? 'alert alert-warning' : 'hide'}>
                    {info}
                  </div>
                  
                  <h1 className="cover-heading">Cover your page.</h1>
                  <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                  <GameCreate conn={this.props.conn} gameName="acquire" text={this.props.translator('create_game')} />
                  <GameJoin conn={this.props.conn} text={this.props.translator('join')} />
                </div>

              </div>

            </div>

          </div>


            /*
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-lg-offset-3 text-center">
            <div className={info ? 'alert alert-warning' : 'hide'}>
              {info}
            </div>
            <select onChange={this.onChangeLanguage} value={this.state.language}>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
            <GameCreate conn={this.props.conn} gameName="acquire" text={this.props.translator('create_game')} />
            <GameJoin conn={this.props.conn} text={this.props.translator('join')} />
          </div>
        </div>
      </div>
      */
    );
  }

}

export default Home;
