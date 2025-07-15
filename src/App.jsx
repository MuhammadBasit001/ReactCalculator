import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Calculator from './Components/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Calculator />} />
        </Route>
      </Routes>
      </BrowserRouter>


    </section>
  )
}

export default App
