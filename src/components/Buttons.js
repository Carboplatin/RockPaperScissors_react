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
                    <button>Test1</button>
                    <button>Test2</button>
                    <button>Test3</button>
            </div>
        )
    }
}

export default Buttons