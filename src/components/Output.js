import React from 'react'

const Output = ({results})=> {
  
    const resultsList = results.map(content => {
        
        return (
            <div key={content.id}>
                <div> {content.content}</div>
                
            </div>
        )
    })

    handleClick() {
        this.setState;
    }

    return (
       
        <div>
            
            
            <button onClick = {handleClick} >TEST</button>

           
            
        </div>
    )




}





export default Output