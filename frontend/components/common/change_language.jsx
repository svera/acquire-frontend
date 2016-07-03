import React from 'react';

class ChangeLanguage extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    localStorage.setItem('language', event.target.value);
    location.reload();
  }

  render() {
    return (
      <select onChange={this.onChange} value={localStorage.getItem('language')}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    );
  }

}

export default ChangeLanguage;
