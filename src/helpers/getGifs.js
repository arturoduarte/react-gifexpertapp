// Es llamado desde GifGrid

// al ser async retorna una promesa
export const getGifs = async(category) => {
  // para escapar espacios --> encodeUri
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=hsqe4aOpAdWN2nzb4d1ZzLEVxsQUci5B`

  const respuesta = await fetch(url)
  // desestructuración de la data
  const {data} = await respuesta.json();
  // console.log(data);

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      // ? --> si viene la información que lo utilice
      url: img.images?.downsized_medium.url
    }
  })


  return gifs;

  // console.log(gifs);
  // almacenamos los valores en setImages
  // setImages(gifs)        
}