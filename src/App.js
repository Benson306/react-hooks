import { useReducer } from "react";


function reducer(state, action){
  switch(action.type){
    case 'incerement':
      return { count: state.count + 1 }
    case 'decrement':
      return {count: state.count - 1 }
    default:
      return state;
  }
  
}

function App() {

  const [state, dispatch] = useReducer(reducer, {count: 0});

  function increment(){
    dispatch({type: 'incerement'});
  }

  function decrement(){
    dispatch({type: 'decrement'});
  }


  return (
    <div className="App flex gap-5 ml-52">
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
