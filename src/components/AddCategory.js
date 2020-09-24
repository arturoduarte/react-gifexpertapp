import React, { useState } from 'react'
import PropTypes from 'prop-types'

                              // desestructuración de (props.setCategories)
export const AddCategory = ({ setCategories }) => {

  // estado del input
  const [inputValue, setInputValue] = useState('');

  // reasignamos el valor del input a inputValue
  const handleInputChange = (evento) => {
    setInputValue(evento.target.value);
  }

  const handleSubmit = (e) => {
    // para prevenir el submit
    e.preventDefault();
    
    // validación para no permitir campos vacios
    if(inputValue.trim().length > 2){
      // el primer argumento es el valor del estado anterior, y luego regresa en nuevo estado
      setCategories(cats => [inputValue, ...cats])        
      setInputValue('');
    }

  }

  return (    
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value= {inputValue}       
        onChange = {handleInputChange}
      />
    </form>    
  )  
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}    
