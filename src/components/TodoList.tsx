import React,{useState} from "react";
import {iTodo} from "../interface";
type TodoListProps ={
    value:iTodo[]
    onToggle(id:number):void
    onRemove:(id:number)=>void
}
const TodoList:React.FC<TodoListProps>=({onToggle,onRemove,value})=>{
if(value.length===0){
    return (
        <h1 className={"center"}>No deal</h1>
    )
}
const removeHandler=(event:React.MouseEvent,id:number)=>{
    event.preventDefault()
    onRemove(id)
}

// const [state,setState]=useState(false)

    return(<>

                <ul>
                    {value.map(todo=>{
                        const classes=['todo']
                        if (todo.completed){
                            classes.push('completed')
                        }
                        return(
                            <li key={todo.id} className={classes.join(' ')} >
                                <label>
                                    <input type="checkbox" onChange={onToggle.bind(null,todo.id)}  checked={todo.completed}/>
                                        <span>{todo.title}</span>
                                        <i className={"material-icons red-text"} onClick={event => removeHandler(event,todo.id)}>delete</i>
                                </label>
                            </li>
                        )
                    })}

                </ul>
        </>

    )
}
export default TodoList
