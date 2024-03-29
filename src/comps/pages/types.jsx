
import { useEffect, useState } from 'react'
import './css/types.css'
import { getAxios } from '../../libs/axios'
import Button1 from '../elems/button1'

export default function Types() {

  const [types, setTypes] = useState(null)

  const fetchTypes = async () => {
    const suffixe = 'type'
    const data = await getAxios(suffixe)
    if(data){ setTypes(data)}
  }

  useEffect(()=>{ fetchTypes() }, []) 

  if(types){
    return (
      <div className='types-cont0'>
        <h1>TYPES</h1>
        <div className='types-cont1'>
          {types.results.map((type, index)=><Button1 key={index} typeName={type.name}/>)}
        </div>
      </div>
    )
  }else{return null}
}