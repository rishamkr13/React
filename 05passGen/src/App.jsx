import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordgen = useCallback(() => {
    let pass = ''
    let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const char = `!@#$%^&*()-_=+[]{}\\|;:'",<.>/?~\``
    const number = '0123456789'

    if (numberAllowed) charSet += number
    if (charAllowed) charSet += char

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * charSet.length)
      pass += charSet[index]
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-blue-300">
      <h1 className="text-xl font-semibold mb-4">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-9">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3"
          placeholder="password"
          readOnly
        />
      </div>

      <div className="flex items-center gap-5 mb-6">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={numberAllowed} onChange={e => setNumberAllowed(e.target.checked)} />
          <span>Include numbers</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={charAllowed} onChange={e => setCharAllowed(e.target.checked)} />
          <span>Include symbols</span>
        </label>
      </div>

      <div className="flex items-center gap-3">
        <label className="flex items-center gap-1">Length:
          <input type="number" min={4} max={64} value={length} onChange={e => setLength(Number(e.target.value))} className="w-20 ml-2 p-1 border" />
        </label>
        <button onClick={passwordgen} className="ml-auto bg-blue-500 text-white px-4 py-3 rounded ">Generate</button>
      </div>
    </div>
  )
}

export default App
// import { useState,  useCallback} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//  const [length,setLength]=useState(8);
//  const [numberAllowed, setNumberAllowed]= useState(false);
//  const [charAllowed , setCharAllowed] = useState(false);
//  const[password , setPassword ]= useState("");


//  const passwordgen = useCallback(()=>{
//     let pass = "";
//     const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     const char = "!@#$%^&*()-_=+[]{}\\|;:'\",<.>/?~`";
//     const number = "0123456789";
    
    
//     if (numberAllowed) str += number;
//     if (charAllowed) str += char;

//     for (let i = 1; i <=length; i++) {
//       const index = Math.floor(Math.random() * charSet.length);
//       pass += ste[index];
//     }

//     setPassword(pass);
//   }, [length, numberAllowed, charAllowed, setPassword]);  //here we are use the callback function as it passes (function , dependencies) , function we can write and the dependencies as arrar and  are the we define as the const upp

//    //here we are use the callback function as it passes (function , dependencies) , function we can write and the dependencies as arrar and  are the we define as the const upp
//   return (
//     <>
//       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 test-orange-500 bg-grey-700">text
//         <h1>password generator</h1>
//         <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
//               <input 
//                 type="text"
//                 value="password"
//                 className="outline-none w-full py-1 px-3"
//                 placeholder="password"
//                 readonly
//               />
//               <button>copy</button>
//         </div>
//         <div>
//            <div></div>
//         </div>
       
//       </div>
    
//         </>
//   )
// }

// export default App
