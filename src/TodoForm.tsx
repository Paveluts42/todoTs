import React,{useState,useRef} from "react";

interface todoFormProps {
    todoHandler(title:string):void
}
export const TodoForm: React.FunctionComponent<todoFormProps> = ({todoHandler}) => {
// const [title,setTitle]=useState<string>('')
//     const changeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>setTitle(event.target.value)
    const ref=useRef<HTMLInputElement>(null)
    const keyPressHandler=(event:React.KeyboardEvent)=>{
    if(event.key==="Enter"){
    todoHandler(ref.current!.value)
        ref.current!.value=""
        // let value=<div>title</div>
        // setTitle("")
    }
    }
    return (
        <div className={"inputField mgTop2"}>
            <input ref={ref}  type="text" id="title" placeholder="input name deal"
            onKeyPress={keyPressHandler}/>
            <label htmlFor="title" className={"active"} >
                input name deal
            </label>
        </div>
    )
}
