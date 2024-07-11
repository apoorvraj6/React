import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(5)
  
  // let counter =5 ;

  const addvalue = () =>{
    if(counter+1 === 21)
    {
      setCounter(20);
    }
    else
    setCounter(counter + 1)
    
  }
  const removevalue = () =>{
    if(counter-1 === -1)
    {
      setCounter(0)
    }
    else
    setCounter(counter-1);
    
    
  }

  return (
    <>
     <h1>React</h1>  
     <h1>Counter Value :{counter}</h1>

     <button
     onClick={addvalue}>Add Value{counter}</button> 
     <br />
     <button
     onClick={removevalue}>Remove Value {counter}</button>
     <footer>
      <p>Footer{counter}</p>
     </footer>
    </>
    
  )
}

export default App
