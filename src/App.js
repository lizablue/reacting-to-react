import React, { Component } from 'react';
import greetApp from "./components/App.jsx";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {greetApp("liz")}
                </header>
            </div>
        );
    }
}

export default App;