import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './compenents/Card'

function App() {
let myObj={
  name:"apoorv",
  age:21
}

let newArr=[1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username="Ankur" btnText="Yaha Dabao" 
    // someObj={myObj} someArr={newArr}
     />
      <Card username="Apoorv" btnText="Press Here" />
      <Card/>

    </>
  )
}

export default App
