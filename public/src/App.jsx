import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import AddMovie from './components/AddMovie'
import EditMovie from './components/EditMovie'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App h-screen bg-cover bg-default">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MovieList/>} exact></Route>
          <Route path='/AddMovie' element={<AddMovie/>} exact></Route>
          <Route path='/EditMovie' element={<EditMovie/>} exact></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
