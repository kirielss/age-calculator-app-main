import { useState } from 'react'
import './App.css'
import Display from './Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Display />
    </div>
  )
}

export default App
