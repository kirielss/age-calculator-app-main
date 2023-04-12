import { useState } from 'react'
import './App.css'
import Display from './Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App h-screen">
      <Display />
    </div>
  )
}

export default App
