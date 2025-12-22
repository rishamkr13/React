import { useState } from 'react'     //here use state is used to change the state in the ui (or changing the value in the ui)
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'







function App() {
 let [counter,setCounter]=useState(5)    //this is hooks in react
 
 
 //thsi is userd to increase the values in the button
 const addValue =() =>{
  if(counter>=20){
    setCounter(0);  //we are calling it like a function when we reach 20 it automatically give hte value to 0
  }else{
  setCounter(counter+1)
 }
}

 const removeValue=()=>{
  if(counter<=0){     //adding if else condtion that we dont want to go less than 0 when removeValue is used
    setCounter(0);
  }else{
  setCounter(counter-1)
 }
}

  return (
    <>
      
    <h1>chai aur React</h1>
    <h2>counter value is {counter}</h2>
      <button className="addbtn" onClick={addValue}>increase value {counter}</button>
      <br />
      <button className="removebtn" onClick={removeValue}>decrease value {counter}</button>
    </>
  )
}

export default App
