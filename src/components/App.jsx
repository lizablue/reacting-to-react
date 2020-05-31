import React, { Component } from 'react';

// const greetApp = (props) => {
//     return <h1>Hello { this.state.name }</h1>;
// }

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "ashley",
            text: "what\'s up?"
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Hello { this.state.name }, { this.state.text }</h1>
                </header>
            </div>
        );
    }
}

export default App;

// export default greetApp;