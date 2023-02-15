import { useReducer, useRef, useState } from "react";

const ACTIONS = {
  ADD_TODO: 'add',
  DELETE_TODO: 'delete_todo'
}

function reducer(todos, action){
  switch(action.type){

    case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.task)]
      
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
  }
  
}

function newTodo(task){
  return {id: Date.now(), task: task, done: false};
}

const UseReducerHook = () => {
    
    const [todos, dispatch] = useReducer(reducer, []);

    const [task, setTask] = useState('');

    const inputRef = useRef();

    function handleSubmit(e){
    e.preventDefault();

    dispatch({type: ACTIONS.ADD_TODO, payload: {task: task}})
    setTask('');
    inputRef.current.value = "";
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)} className="flex justify-center p-5">
        <input type="text" ref={inputRef} onChange={e => setTask(e.target.value)} className="p-3"  placeholder="Add a Task" required />
        <input type="submit" value="Add Task" className="bg-red-900 text-white p-3" />
      </form>
      <br />
      {
        todos.map(todo =>(
          <div className="flex justify-center bg-zinc-300 p-3 m-1">
            <h1 className="w-3/4">{todo.task}</h1>
            <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})} className="w-1/4 bg-red-600 hover:bg-red-900 p-1 text-white rounded">Delete</button>
          </div>
        ))
      }
        </div>
    )
}

export default UseReducerHook;