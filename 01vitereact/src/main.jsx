import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function Myapp(){
  return (
    <>
    <h1>custom react from main.jsx!</h1>
    </>
  )
}

const anotherElement=(
  <a href="https://www.google.com" target="_blank">visit google</a>
)
createRoot(document.getElementById('root')).render(
 <>
    <App />
    <Myapp />
    {anotherElement}
 
 </>
    
)
