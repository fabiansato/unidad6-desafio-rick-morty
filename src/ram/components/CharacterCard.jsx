import React from 'react';

export const CharacterCard = ({ name, image, id }) => (
  <li key={id}>
    <img src={image} alt={name} />
    <p>{name}</p>
  </li>
);
