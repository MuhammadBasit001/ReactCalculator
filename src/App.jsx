import './App.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Calculator from './Components/Calculator'
import Calculator2 from './Components/Calculator2'
import Header from './Resuable/Header'

function App() {

  return (
    <section>
      <BrowserRouter>
      <Header />
      <Routes>
        
          <Route path="/" element={<Calculator />} />
          <Route path="/cal" element={<Calculator2 />} />
        
      </Routes>
      </BrowserRouter>


    </section>
  )
}

export default App
