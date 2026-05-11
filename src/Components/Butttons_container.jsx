import styles from './Buttons_container.module.css';
const Buttons_container = ({onButtonClick}) =>{

  const buttonNames = ['c', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.' ]
  return  (
    <div className= {styles.buttonsContainer}>
     {buttonNames.map(buttonName => <button className= {styles.button} onClick={onButtonClick}>{buttonName}</button>)}
      
    </div>
  );
}
  export default Buttons_container;