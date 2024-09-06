import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreatePage from './components/CreatePage/CreatePage'
import ViewJobPost from './components/ViewJobPost'
import Apply from './components/Apply'
import Submit from './components/Submit'

function App() 
{
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='create' element={<CreatePage></CreatePage>}/>
        <Route path='view/:company/:title' >
          <Route path='' element={<ViewJobPost/>}/>
          <Route path='apply' element={<Apply></Apply>}/>
          <Route path='apply/submit' element = {<Submit></Submit>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
