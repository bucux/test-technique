


import axios from "axios";

export const getAxios = async(suffixe) => {
  try{
    const datas = await axios.get(import.meta.env.VITE_url_pokemon + suffixe)
    return datas.data
  }catch(error){
    if (error instanceof Error) {
      console.log(error);
    } else {
      console.log('Une erreur inattendue est survenue');
    }
  }
  return null
}

export const postAxios = async(suffixe, body) => {
  try{
    const datas = await axios.post(import.meta.env.VITE_url_pokemon + suffixe, body)
    return datas.data
  }catch(error){
    if (error instanceof Error) {
      console.log(error);
    } else {
      console.log('Une erreur inattendue est survenue');
    }
  }
  return null
}