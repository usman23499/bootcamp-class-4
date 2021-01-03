import { useState } from "react";
import { Message } from "./message";
import  "./App.css";
// import css file


function App() {
 // we can now add data in function is new function bsed

 let [count,setcount]=useState(0)


let [isMorning,setMorning]=useState(true)


// setcount(2)
// the value is update
  return (
    <div className={isMorning ? 'daylight' : 'box'} >

      {/* use className */}

      {/* <h1>Count : {count}</h1> */}
   

      <h1> DAY TIME {isMorning ? 'Morning' : 'Evening'}</h1>
      <Message sendcount={count} />
   
   
   
   
      <button onClick={()=>setcount(count + 1)  }>
        {/* or ++count  */}
        Update Counter
      </button>
   

        {/* now make day and night light */}
   
      <button onClick={()=>setMorning(!isMorning)} >Change Light</button>
   
   
   
   
   
   
    </div>
  );
}

export default App;
