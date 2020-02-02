import React from 'react'

const Output = ({results})=> {
  
    const resultsList = results.map(content => {
        
        return (
            <div key={content.id}>
                <div> {content.content}</div>
                
            </div>
        )
    })

   

    return (
       
        <div>
            
            
            <button >TEST</button>
            {resultsList}
           
            
        </div>
    )




}





export default Output