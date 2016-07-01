import React from 'react';

class ChangeLanguage extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    console.log(event.target.value);
    localStorage.setItem('language', event.target.value);
  }

  render() {
    return (
      <select onChange={this.onChange}>
        <option value="en" selected={localStorage.getItem('language') == 'en' ? true : false }>English</option>
        <option value="es" selected={localStorage.getItem('language') == 'es' ? true : false }>Español</option>
      </select>
    );
  }

}

export default ChangeLanguage;
