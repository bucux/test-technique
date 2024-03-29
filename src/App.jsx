
import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Header1 from './comps/sections/header1'
import Home from './comps/pages/home'
import Modale1 from './comps/sections/modale1'
import Pokemons from './comps/pages/pokemons'
import Pokemon from './comps/pages/pokemon'
import Types from './comps/pages/types'
import Type from './comps/pages/type'

function App() {

  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    setIsLoading(false)
  }, [])

  return (
    <Router>
      <Header1/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/types" element={<Types />} />
        <Route path="/type" element={<Type />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {isLoading ? <Modale1/> : null}
    </Router>
  )
}

export default App
