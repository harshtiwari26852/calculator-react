import Buttons_container from './Components/Butttons_container'
import styles from './App.module.css'
import Display from './Components/Display'
function App() {
 
  return (
  <div className = {styles.calculator}>
   <Display></Display>
    <Buttons_container></Buttons_container>

  </div>
  )
}

export default App
