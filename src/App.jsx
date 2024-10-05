
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Buttons({clickedfun}){



  return(
    <>
    <div id='buttons'>
<div id='numbers' >
<button id="no" onClick={clickedfun}>1</button>
<button id="no" onClick={clickedfun}>2</button>
<button id="no" onClick={clickedfun}>3</button>
<button id="no" onClick={clickedfun}>4</button>
<button id="no" onClick={clickedfun}>5</button>
<button id="no" onClick={clickedfun}>6</button>
<button id="no" onClick={clickedfun}>7</button>
<button id="no" onClick={clickedfun}>8</button>
<button id="no" onClick={clickedfun}>9</button>
<button id="no" onClick={clickedfun}>.</button>
<button id="no" onClick={clickedfun}>0</button>
<button id="no" onClick={clickedfun}>00</button>

</div>
<div id='cal'>
      <button id='key' onClick={clickedfun}>+</button>
      <button id='key' onClick={clickedfun}>-</button>
      <button id='key' onClick={clickedfun}>*</button>
      <button id='key' onClick={clickedfun}>/</button>
      <button id='key' onClick={clickedfun}>%</button>
      <button id='key' onClick={clickedfun}>AC</button>
      <button id='key' onClick={clickedfun}>=</button>
    
      
    </div>
    
  
    </div>
    
    </>
  )
}





function Main(){
  
  const [clickedbtn,setclickedbtn]=useState("")
  const [op,setop]=useState(null)

  const clickedfun=(e)=>{
 const clicked=e.target.innerText;
 if(clicked==="AC"){
  setclickedbtn(" ")
  return;
 }

 if(clicked==="="){
setclickedbtn(Calculations(clickedbtn));
return;
 }
 setclickedbtn(prev=>prev+clicked)

 if(["+","-","*","/","%"]){
  setop(clicked)
    }
  }

 

  const Calculations=(exp)=>{
  try{
    const result=eval(exp);
    return result.toString();
  }catch(err){
return "error"
  }
  }
  return (
    <>
    <div id='outer'>
      <div id='screen'>
{clickedbtn}
      </div>
 <Buttons clickedfun={clickedfun}/>

    </div>
    </>
  )
}


function App() {
return(<>
<Main/>

</>)
}

export default App
