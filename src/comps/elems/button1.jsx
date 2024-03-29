

import './css/button1.css'

import { useNavigate } from 'react-router-dom'

export default function Button1({typeName}) {

  const navigate = useNavigate()

  const clic = () => {
    navigate('/type', { state: { typeName } });
  }

  if(typeName){
    return (
      <button className='button1-cont0' onClick={clic}>
        {typeName}
      </button>
    )
  }else{return null}
}