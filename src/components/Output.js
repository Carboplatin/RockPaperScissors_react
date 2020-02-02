import React from 'react'

const Output = ({results, compareContent })=> {
  
    const resultsList = results.map(content => {
        
        return (
            <div key={content.id}>
                <div> {content.content}</div>
                <button onClick={() => {compareContent(content.content)}}> {content.content}</button>
                {/* <button onClick={() => {compareContent(content.content)}}> {content.content} Rock</button>
                <button onClick={() => {compareContent(content.content)}}> {content.content} Scissors</button> */}
                
            </div>
        )
        
    })

    // return items[Math.floor(Math.random()*items.length)];

    return (
       
        <div>
            
            
            <button className="paper">TEST paper</button>
            {resultsList}
           
            
        </div>
    )




}





export default Output