import React from 'react';
import './Card.css';

const Card = ({ bat }) => {
  const { name, imgSrc, age, sexe, taille, poids, color } = bat;

  return (
    <div className="card">
      <img className="bat-img" src={imgSrc} alt={name} />
     
      <div className="card-info">
      <h2 style={{ color }}>{name}</h2>
        <p>Age: {age}</p>
        <p>Sexe: {sexe}</p>
        <p>Taille: {taille}</p>
        <p>Poids: {poids}</p>
      </div>
    </div>
  );
};

export default Card;
