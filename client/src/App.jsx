import { Route, Routes} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Sheet from './components/Sheet'
import SignIn from './components/SignIn'


function App() {
  
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/sheet' element={<Sheet/>}/>
      </Routes>
    </>
  )
}

export default App
