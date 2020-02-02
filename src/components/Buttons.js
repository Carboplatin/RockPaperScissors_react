import React, { Component } from 'react'


class Buttons extends Component {
    state= {
        results: [
            {id: 4, content:'rock' },
            {id: 5, content:'paper' },
            {id: 6, content:'scissors' },
        ]
    }


    render () {
        return (
            <div>
                    <button>Paper</button>
                    <button>Rock</button>
                    <button>Scissors</button>
            </div>
        )
    }
}

export default Buttons