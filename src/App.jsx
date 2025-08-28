import { useState } from "react"


function App() {
    
     const [samu,setSamu] = useState(0)
     const handleClick = ()=>{
      if (samu < 20){
       
        setSamu(samu +1)
      }
      
     }
     
  return (
   <div>
    {samu}
    <button onClick={handleClick}>Increment</button>
   
   </div>
  )
}

export default App
