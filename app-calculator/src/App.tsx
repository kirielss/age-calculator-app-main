import { useState } from 'react'
import './App.css'
import Header from './Header'
import Display from './Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Display />
    </div>
  )
}

export default App
