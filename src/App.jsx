import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    < BrowserRouter>
      <Routes>
        <Route path='/' element={
          <h1 className='text-4xl'>Bienvenidos a 
            <span className='text-blue-600'> MOLINASOLUTIONS</span>
          </h1>
        }/>
        <Route path='/fruppys' element={
          <h1 className='text-4xl'>Bienvenidos a 
            <span className='text-orange-400'> Fruppys</span>
          </h1>
        } />
      </Routes>
    </ BrowserRouter>
  )
}

export default App
