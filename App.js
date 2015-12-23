import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

class App extends React.Component {

    constructor() {
        super();
        this.state = { title: 'username' };
        this.update = this.update.bind(this);
    }

    update(e) {
        this.setState({ title: ReactDOM.findDOMNode(this.refs.inp).value });
    }

    render() {
        return(
            <div>
                <Header title={ this.state.title } />
                <input ref="inp"
                       type="text"
                       placeholder="Enter name" />
                <button styleClass="" onClick={ this.update }>
                    SET NAME
                </button>
                <p> static text </p>
            </div>
        )
    }
}

export default App