import React, { Component } from 'react';
// import Buttons from './components/Buttons'
import Output from './components/Output'
import './App.css';


class App extends Component {
    state= {
        results: [
            {id: 1, content:'rock' },
            {id: 2, content:'paper' },
            {id: 3, content:'scissors' },
        ]
    }

    compareContent = (content) => {
       console.log(content)
    }

    render ( ) {
        return (
            <div className="container">
                {/* <Buttons /> */}
                <Output results={this.state.results}  compareContent={this.compareContent}/>
            </div>
        )
    }


}


export default App;
