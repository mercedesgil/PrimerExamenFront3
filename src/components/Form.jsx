import React, { useState } from 'react';

export const Form = ({onSubmit, titulo}) => {
  const [comida, setComida] = useState('');
  const [postre, setPostre] = useState('');

  const handlerChangeComida = (e) => {
    setComida(e.target.value);
  }

  const handlerChangePostre = (e) => {
    setPostre(e.target.value); 
  }
  
  const handlerSubmit = (e) => {

    e.preventDefault();

    const data = {
      comida,
      postre
    }
    
    onSubmit(data)
  }

  return (
    <form onSubmit={handlerSubmit}>
      <h1>{titulo}</h1>
      <input
        placeholder="Ingresa tu comida favorita"
        id="comida"
        type="text"
        name="comida"
        value={comida}
        onChange={handlerChangeComida}
      />
          <br />
          <br />
      <input
        placeholder="Ingresa tu postre favorito"
        type="text"
        id="postre"
        name="postre"
        value={postre}
        onChange={handlerChangePostre}
      />
        <br />
        <br />
        <br />


      <input type="submit" />
      <br />
      <br />
    </form>
  )
}