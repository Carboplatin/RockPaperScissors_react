import React from 'react'


const Buttons =({compareContent}) => {

    const Compare = results.map(content => {
        
        return (
            <div key={content.id}>
                
                <button onClick={() => {compareContent(content.content)}}> {content.content} Paper</button>
                <button onClick={() => {compareContent(content.content)}}> {content.content} Rock</button>
                <button onClick={() => {compareContent(content.content)}}> {content.content} Scissors</button>
            </div>
        )
    })

   
        return (
            <div>
                   {Compare}
            </div>
        )
    
}

export default Buttons