import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({ category }) => {
  
  // desestructuración(dos puntos es para renombrar la variable)
  // useFetchGifs --> es un customHooks
  const {data:images, loading} = useFetchGifs(category);
      
  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{ category }</h3>
      
      {loading && <p className="animate__animated animate__flash">loading...</p>}
      
        {/* iteramos cada valor del hash */}

      <div className="card-grid">        
          {
            images.map( image => (            
              <GifGridItem 
                key={image.id} 
                img= {image} 
              />
            ))
        }
        
      </div>
    </>
  )
}

