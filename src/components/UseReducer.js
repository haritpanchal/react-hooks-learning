import React, { useReducer } from 'react'


const reducer = (state, { type, payload }) => {
    switch (type) {
  
    case "INCREAMENT":
      return { ...state, count:state.count + 1 }
    case "DECREAMENT":
        if(state.count === 0){
            return state
        }
        return { 
            ...state, count:state.count - 1 }
    case "TOGGLE":
        return {...state, toggleText: !state.toggleText}    
    default:
      return state
    }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0, toggleText: true})

  return (
    <div>
        <h2 className='text-center'>{state.count}</h2>
        <h2 className='text-center'>{state.toggleText && "Hello React"}</h2>
        <button className='btn' onClick={() => {
            dispatch({type:'INCREAMENT', payload:'1'})
            // dispatch({type:'TOGGLE', })
        }}>Increament</button>
        <button className='btn' onClick={()=> {
            dispatch({type:'DECREAMENT'})
        }}>Decreament</button>
    </div>
  )
}

export default UseReducer