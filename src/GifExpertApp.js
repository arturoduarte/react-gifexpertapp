import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {  
  // hook 
  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = (e) => {    
  //   // ****Primera solución*****
  //   // extraemos las categorias con el operador spread, y añadimos una nueva
  //   // setCategories([...categories, 'Hunter'])

  //   // *****2da Solución*****
  //   // el primer argumento es el valor del estado anterior, y luego regresa en nuevo estado
  //   setCategories(cats => [...cats, 'Hunter'])    
  // }

  return (
    <>    
      <h2>GifExpertApp</h2>
      {/* le mandamos propiedades al AddCategory, en este caso una función */}
      <AddCategory setCategories={ setCategories } />
      <hr />

      
      <ol>
          {/* el map recibe 2 argumentos por defecto, el primero es el elemento del arreglo, y luego tenemos el indice*/}
        {
          categories.map( category => (
            <GifGrid 
              key = {category}
              category = { category }
            />
          ))
        }
      </ol>
    </>
    
    );
  }  

