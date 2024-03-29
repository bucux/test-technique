

import { useState } from 'react';
import Button1 from '../elems/button1';
import Button2 from '../elems/button2';
import './css/pokemon.css'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getAxios } from '../../libs/axios';

export default function Pokemon() {

  const location = useLocation();
  const [pokemon, setPokemon] = useState(null)
  const [pokemonName, setName] = useState(null)
  const [pokemonUrl, setUrl] = useState(null)

  const fetchPokemon = async () => {
    const suffixe = 'pokemon/' + pokemonName
    const data = await getAxios(suffixe)
    if(data){ 
      setPokemon(data)
    }
  }

  useEffect(()=>{
    setName(location.state?.pokemonName)
    setUrl(location.state?.pokemonUrl)
  }, [])

  useEffect(()=>{
    if(pokemonName){ fetchPokemon() }
  }, [pokemonName])


  if(pokemon){
    return (
      <div className='pokemon-cont0'>
        <h1>POKEMON</h1>
        <div className='pokemon-cont1'>
          <Button2 pokemonName={pokemonName} pokemonUrl={pokemonUrl}/>
          <div className='pokemon-cont2'>
            {pokemon.types.map((type, index)=><Button1 key={index} typeName={type.type.name}/>)}
          </div>
        </div>
      </div>
    )
  } else{return null}
}