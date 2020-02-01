import React, { Component } from 'react';
import Buttons from './components/Buttons'
import Output from './components/Output'
import './App.css';


class App extends Component {
    state= {
        results: [
            {id: 1, content:'rock' },
            {id: 1, content:'paper' },
            {id: 1, content:'scissors' },
        ]
    }



    render ( ) {
        return (
            <div className="container">
                <Buttons />
                <Output results={this.state.results} />
            </div>
        )
    }


}


export default App;
