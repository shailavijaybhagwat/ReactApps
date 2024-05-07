import { useRef } from "react";
// import {child} from "./ChildRef.js";
export default function ButtonRefFunction() {
    const ButtonRef=useRef();
    // const ChildRef=useRef();

  
    
    function handleClick(){
       ButtonRef.current.innerText="Clicked";
       ButtonRef.current.style.backgroundColor="Red";
       //ChildRef.current.changeText('New Text');
    }
    
    return (
      
        <><button onClick={handleClick} ref={ButtonRef}>Click me</button>
        
       
        {/* <Child ref={ChildRef}/> */}
        </>
          
    );
  }