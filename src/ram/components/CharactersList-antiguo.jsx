import React from 'react'

// arreglo temporal
const character = [
  {
    id: 1,
    name: 'pepe',
  },
  {
    id: 2,
    name: 'grillo',
  }
];

export const CharactersList = () => {
  /* Implemente aquí abajo su useState */


  /* Implemente aquí abajo su useEffect */

  return (
    <ul>
      {
        character.map((item) => (
          <li key={ item.id }>
            { item.name }
          </li>
        ))
      }
    </ul>
  )
}
