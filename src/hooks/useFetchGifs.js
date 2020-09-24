// los customHooks, es una forma de extraer lógica de algún componente, o lógica que queremos reutilizar y extraerla de tal manera que sea sencillo utilizarla nuevamente
// Los hooks son funciones
// los hooks también pueden tener un estado

import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

  const [state, setstate] = useState({
    data: [],
    loading: true
  })

  
  // ejecutar cierto código de forma condicional, solo se dispara cuando cambia la vategoría
  useEffect(()=>{
    // lo que hace es ejecutar la instrucción cuando el componente es renderizado por primera vez
    // retorna una promesa, porque el método es un async, por eso escribimos el then    
    getGifs(category)
      .then(imgs => {
                                      
          setstate({
          data: imgs,
          loading: false
        })
        
    });
  },[category])
    

  return state; //{data: [], loading: true}
}