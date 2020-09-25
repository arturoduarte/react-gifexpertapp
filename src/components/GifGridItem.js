import React from 'react'


export const GifGridItem = ({img}) => {
    
  // las clases animates fueron importadas desde https://animate.style/
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={img.url} alt={img.title} />
      <p>{img.title}</p>
    </div>
  )
}
