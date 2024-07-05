import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  const username ="chai aur code"
  return(
    <div>
      <h1>Custom App{username} ||</h1>
    </div>
  )
}

// const ReactElement = {
//   type:'a',
//   props:{
//       herf:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// } 

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit Google</a>
)


const reactElement = React.createElement(
  'a',
  {href:'https://google.com',targer:'_blank'},
  'click me to visit google'

)


ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)