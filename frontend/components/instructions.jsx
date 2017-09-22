import React from 'react';

class Instructions extends React.Component {

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.props.translator("game.instructions")}} />
        )
    }
}

export default Instructions;