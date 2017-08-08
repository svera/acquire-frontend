import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';

class Sidebar extends React.Component {
	render() {
  	return (
    	<Modal className='Sidebar left' show={ this.props.isVisible } onHide={this.props.onHide} autoFocus keyboard>
      	<Modal.Header closeButton>
        	<Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
      	<Modal.Body>
      		{ this.props.children }
        </Modal.Body>
      </Modal>
    );
  }
}

export default Sidebar;