import {useState } from 'react'
import './App.css'
f/*unction App(){
 const [count,setCount] = useState(0);
  const increase = () => {
    setCount(count+1);
 }
 const decrease = () => {
    setCount(count-1);
 }
 const reset = () => {
    setCount(count=0);
 }
 return (
  <>
  <h1>Count: {count}</h1>
  <button onClick={increase}>increment</button>
   <button onClick={decrease}>decrement</button>
   <button onClick={reset}>reset</button>
  </>
 )
}*/

function App(){
  const [isLongin,setisLogin]=useState(false);

  const change = () => {
  setisLogin(!isLogin)
}
return (
  <>
  <h1>{isLogin ? "welcome user":"please Login"}</h1>
  <button onClick={change}>{isLogin ? "Log out":"Log in"} </button>
  </>
)
}

export default App;