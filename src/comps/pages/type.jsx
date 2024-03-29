

import { useState } from 'react';
import './css/type.css'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getAxios } from '../../libs/axios';
import Button2 from '../elems/button2';

export default function Type() {

  const location = useLocation();
  const [type, setType] = useState(null)
  const [typeName, setTypeName] = useState(null)

  const fetchType = async () => {
    const suffixe = 'type/' + typeName
    const data = await getAxios(suffixe)
    if(data){ 
      setType(data)
    }
  }

  useEffect(()=>{
    setTypeName(location.state?.typeName)
  }, [])

  useEffect(()=>{
    if(typeName) {fetchType()}
  }, [typeName])


  if(type){
    return (
      <div className='type-cont0'>
        <h1>TYPE : {typeName}</h1>
        <div className='type-cont1'>
          {type.pokemon.map((pokemon, index)=><Button2 key={index} pokemonName={pokemon.pokemon.name} pokemonUrl={pokemon.pokemon.url}/>)}
        </div>
      </div>
    )
  } else{return null}
}