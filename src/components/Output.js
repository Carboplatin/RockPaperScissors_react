import React from 'react'

const Output = ({choices})=> {
    console.log(choices)

    const choicesList = choices.map((results)=>{
        return (
            <div>
                <div>Choice: {results.choice1}</div>
                {/* <div>Choice: {results.choice2}</div>
                <div>Choice: {results.choice3}</div> */}
               
            </div>
        )
    })
    
    return (
        <h1>{choicesList}</h1>
           
        
    )
}
     
            
            
            
           

export default Output




   

    
    
    




