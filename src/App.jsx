import Buttons_container from './Components/Butttons_container'
import styles from './App.module.css'
import Display from './Components/Display'
import { useState } from 'react'
function App() {
  let [calVal, setCalVal] = useState("");
  
  const onButtonClick = (event)=> {

    let buttonText = event.target.innerText;
    if(buttonText === 'c'){
      setCalVal("");
    }
    else if(buttonText === '='){
      const result = eval(calVal);
      setCalVal(result.toString());
    }
    else if(buttonText === '<-'){
      setCalVal(calVal.slice(0, -1));
    }
    else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
    
    };
  return (<>
  <center>
  <div className = {styles.calculator}>
   <Display displayValue = {calVal}></Display>
    <Buttons_container onButtonClick={onButtonClick}></Buttons_container>

  </div>
  </center>
  </>
  )
}

export default App
