import { forwardRef,useImperativeHandle,useState } from "react";

const Childdata =forwardRef((props,ref) =>{
const [text,setText] = useState('Original Text');

useImperativeHandle(ref,()=>({
        ChangeText(newText){
            setText(newText);
        }
    }));
    return (<p>{text}</p>);
});

export default Childdata;