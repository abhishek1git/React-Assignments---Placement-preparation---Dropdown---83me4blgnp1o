[12:34, 24/10/2021] Mohit REC CSE: import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0)

  return (
    <div className="ball">
      <h1 className="count" onDoubleClick={() => { alert("cant edit it") }}>{count}</h1>
      <button className='increment-button' onClick={() => { setCount(count + 1) }}>Increment</button>
    </div>
  )
}


export default App;
[12:34, 24/10/2021] Mohit REC CSE: import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here
  const [timer,setTimer] = useState(0)
  const [start,setStart] = useState(false)

  function tick(){
    const tCount = timer-1
    setTimer(tCount)
  }

  function handleKeyDown(event){
    if (event.keyCode===13){
      const tCount = Math.floor(event.target.value)
      // console.log(tCount)
      if(typeof(tCount) === "number" && tCount > 0){
        setTimer(tCount)
        setStart(true) 
      }else{
        setTimer(0)
      }
    }
  }

  useEffect(()=>{
    if (timer===0){
      setStart(false)
    }
    if (start){
      const interval = setInterval(tick, 1000);
      return () => clearInterval(interval);
    }
    
  },[start,timer])

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={handleKeyDown} /> sec.
        </h1>
      </div>
      <div id="current-time">{timer}</div>
    </div>
  )
}


export default App;
