
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'

import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import SignUp from './components/SignUp/SignUp'


function App() {

  return (
    <div className='app-container'>
      <NavBar/>
      <hr style={{width:"100%"}} />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signup' element={<SignUp/>}/>
    

      </Routes>


   
    </div>
  )
}

export default App
