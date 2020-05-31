import React, { Component } from 'react';
// import greetApp from "./components/App.jsx";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "ashley"
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Hello { this.state.text }</h1>
                </header>
            </div>
        );
    }
}

export default App;