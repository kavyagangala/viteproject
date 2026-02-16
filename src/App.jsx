import { useState } from "react";


function App() {
  const [text,setText] = useState("")
  const changeValue = (event) => {
    setText(event.target.value);
  }
  return(
    <>
    <input type="text" onChange={changeValue}  value = {text}/>
    <p>{text}</p>
    </>
  )
 }
 export default App