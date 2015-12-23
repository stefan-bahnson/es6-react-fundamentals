import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <h1>Welcome { this.props.title }!</h1>
        )
    }
}

export default Header