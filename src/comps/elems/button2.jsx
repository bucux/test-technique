

import { useEffect, useState } from 'react';
import './css/button2.css'

import { useNavigate } from 'react-router-dom'

export default function Button2({pokemonName, pokemonUrl}) {

  const navigate = useNavigate()
  const [altUrl, setAltUrl] = useState(null)

  const clic = () => {
    navigate('/pokemon', { state: { pokemonName, pokemonUrl } });
  }

  function getId(url) {
    const cleanedUrl = url.endsWith('/') ? url.slice(0, -1) : url;
    const parts = cleanedUrl.split('/');
    const id = parts[parts.length - 1];
    return id;
  }

  useEffect(()=>{
    if(pokemonUrl){
      setAltUrl("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + getId(pokemonUrl) + ".png")
    }
  }, [pokemonUrl])



  if(altUrl){
    return (
      <div className='button2-cont0' onClick={clic}>
        <h2>{pokemonName}</h2>
        <img src={altUrl} alt={`image de ${pokemonName}`} />
      </div>
    )
  } return null
}