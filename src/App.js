import Player from './Components/Player.js';
import Challange from './Components/TimerChallange.js';
import Demo from './Components/CounterIncrement.js';
//  import Demo2  from './Components/AutoFocus.js';
import ButtonRefFunction from './Components/ButtonRef.js';
import { useRef } from "react";


import Childdata from "./Child.js";

function App() {
  const ChildRef = useRef();

  function handleChangeClick(){
    ChildRef.current.changeText('New Text');
 }

  return (
    <>
      <Player />
      <div id="challenges">
        <Challange title={"Easy"} targettime={1}/>
        <Challange title={"Not Easy"} targettime={5}/>
        <Challange title={"Getting Difficult"} targettime={10}/>
        <Challange title={"Tough"} targettime={15}/>
      </div>
      <div><ButtonRefFunction/></div>
      <Demo></Demo>
      {/* <Demo2></Demo2> */}
      <div><button onClick={handleChangeClick}>Click change text</button>
      {/* <Childdata ref={ChildRef} /> */}
      {/* https://www.youtube.com/watch?v=QzUxeFLk_t0  */}
      {/* https://medium.com/@omkarbhavare2406/prop-drilling-in-react-8819c609c376 */}
      {/* pROPS IN REACT */}
      {/* https://www.freecodecamp.org/news/learn-react-key-concepts/ */}
      {/* https://www.youtube.com/watch?v=nS5qbSJLGx8 */}
      
      {/* https://www.youtube.com/watch?v=kzwhFiw_My4 */}
      {/* LAZY LOADING OR CODE SPLITTING */}
      {/* https://www.youtube.com/watch?v=ivzENZkBPVQ */}
      {/* https://www.youtube.com/watch?v=FUKpWgRyPlU */}
      {/* List and crud */}
      </div>
    </>
  );
}

export default App;
