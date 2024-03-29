


import { useEffect, useState } from 'react'
import './css/pokemons.css'
import { getAxios } from '../../libs/axios'
import Button2 from '../elems/button2'

export default function Pokemons() {

  const [pokemons, setPokemons] = useState(null)

  const fetchPokemons = async () => {
    const suffixe = 'pokemon'
    const data = await getAxios(suffixe)
    if(data){ setPokemons(data)}
  }

  useEffect(()=>{ fetchPokemons() }, []) 

  if(pokemons){
    return (
      <div className='pokemons-cont0'>
        <h1>POKEMONS</h1>
        <div className='pokemons-cont1'>
          {pokemons.results.map((pokemon, index)=><Button2 key={index} pokemonName={pokemon.name} pokemonUrl={pokemon.url}/>)}
        </div>
      </div>
    )
  }else{return null}
}