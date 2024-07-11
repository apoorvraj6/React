import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let counter =5 ;

  const addvalue = () =>{
    counter = counter + 1;
    console.log("clicked",counter)
  }

  return (
    <>
     <h1>React</h1>  
     <h1>Counter Value :{counter}</h1>

     <button
     onClick={addvalue}>Add Value{counter}</button> 
     <br />
     <button>Remove Value {counter}</button>
     <footer>
      <p>Footer{counter}</p>
     </footer>
    </>
    
  )
}

export default App
