import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() 
{
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route path='home' Component={HomePage} />
        </Route>
      </Routes>
    </>
  )
}

export default App
