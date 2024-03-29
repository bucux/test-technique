
import './css/header1.css'

import { Link, useNavigate } from 'react-router-dom'

export default function Header1() {

  const navigate = useNavigate()

  const clic = () => {
    navigate('/')
  }

  return (
    <div className='header1-cont0'>
      <img src="logoPokemon.png" alt="logo pokemon" onClick={clic}/>
      <div className='header1-cont1'>
        <Link to={'/pokemons'}>
          <p>Pokemons</p>
        </Link>
        <Link to={'/types'}>Types</Link>
      </div>
    </div>
  )
}
