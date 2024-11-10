import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './components/board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Board></Board>
    </>
  )
}

export default App
