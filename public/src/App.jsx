import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App h-full bg-cover bg-default">
      <MovieList/>

    </div>
  )
}

export default App
