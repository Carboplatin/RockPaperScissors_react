import React, { Component } from 'react';
// import Buttons from './components/Buttons'
import Output from './components/Output'
import './App.css';


class App extends Component {
    state= {
        results: [
            {id: 1, choice1:'rock' },
            {id: 2, choice2:'paper' },
            {id: 3, choice3:'scissors' },
        ]
    }

   

    render () {
        return (
            <div className="container">
                
                <Output choices={this.state.results}/>
                
            </div>
        )
    }


}


export default App;
