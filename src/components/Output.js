import React from 'react'

const Output = ({results})=> {
  
    const resultsList = results.map(content => {
        
        return (
            <button onClick={content.content}>Content Button</button>
            // <div key={content.id}>
            //     <div> {content.content}</div>
            // </div>
        )
        
    })
    
    

    hello = () => {
        return  "hello world" 
    }
    
    // return items[Math.floor(Math.random()*items.length)];

    return (
       
        <div>
            
            
            <button className="paper">TEST paper {resultsList} </button>
            {resultsList}
           
            
        </div>
    )




}





export default Output