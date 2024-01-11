import React from 'react';

const Input= (props) => {
  return (
    <div>
      <div>Input any Number: </div>
      <div>
        <form>
          <input type="number" id='inputNum' onChange={val => props.funcInp(val)} className='border border-gray-500 p-2 mb-2 w-30 input-num'/>
          <button onClick={props.funcHandleClick} type='submit' className='bg-cyan-400 p-2 hover:bg-cyan-700 btn-input'>Find</button>
        </form>
      </div>
    </div>
  );
}

export default Input;