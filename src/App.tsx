import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './slices/counterSlice'
import { RootState } from './app/store';
function App() {

  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.counter)

  return (
    <>
      <p>current count :{count}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
    </>
  )
}

export default App
