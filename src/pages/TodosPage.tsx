import React , {useState,useEffect} from "react";
import {TodoForm} from "../TodoForm";
import TodoList from "../components/TodoList";
import {iTodo} from "../interface";


declare var confirm:(question:string)=>boolean

export const TodosPage:React.FC=()=>{
    const [value, setValue] = useState<iTodo[]>([])
    useEffect(()=>{
        const saved=JSON.parse(localStorage.getItem('todos')||"[]")as iTodo[]
        setValue(saved)
    },[])

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(value))

    },[value])
    const addHandler = (title: string) => {
        const newTodo: iTodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        setValue(prev => [newTodo, ...prev])
    }
    const addCheckt = (id: number) => {
        setValue((state) => state.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }
    const remoweHandl = (id: number) => {
        const showConf = confirm("are you sure?")
        if (showConf) {
            setValue(prev => prev.filter((todo) => todo.id!==id))
        }
    }
    return(
        <>
            <TodoForm todoHandler={addHandler}/>
            <TodoList value={value} onToggle={addCheckt} onRemove={remoweHandl}/>
            </>

    )
}
