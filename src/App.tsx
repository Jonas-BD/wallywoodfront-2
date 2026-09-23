import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<h1>Home</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
