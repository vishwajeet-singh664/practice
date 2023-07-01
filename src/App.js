import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './actions';


function App() {
const myState=useSelector((state)=>state.changeTheNumber)
const dispatch=useDispatch();

  return (

    
    <div className="App">
      <h3>Increment and decrement counter using redux</h3>
      <div className='one'>
        <button className='button' onClick={()=>dispatch(incNumber(5))}>+</button>
        <input className ="input" type="text" value={myState} />
        <button className='button' onClick={()=>dispatch(decNumber(5))}>-</button>
      </div>
    </div>
  );
}

export default App;
