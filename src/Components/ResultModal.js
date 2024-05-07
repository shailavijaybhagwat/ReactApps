import { forwardRef,useImperativeHandle,useRef } from "react";
 
const reportModal=forwardRef(function ResultModal({result,targetTime},ref) {

    const dialog=useRef();
    // useImperativeHandle(ref,()=>{
    //     return {
            
    //     };
    // });

    useImperativeHandle(ref,()=>{
        return {
            openDialog() {
                dialog.current.showModal();
            }
            
        };
    });
    return (
      <dialog ref={dialog} className="result-modal" open>
        <h3>You {result}</h3>
        <p>Target Time : <strong>{targetTime} seconds..</strong></p>
        <p>You stopped timer with <strong>X seconds. left</strong></p>
        <form method="dialog"><button>Close</button></form>
      </dialog>
    );
  })
  
export default reportModal;