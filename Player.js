import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ nom, equipe, nationalite, numero, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>
          <p>Équipe: {equipe}</p>
          <p>Nationalité: {nationalite}</p>
          <p>Numéro: {numero}</p>
          <p>Âge: {age}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  nom: "Nom Inconnu",
  equipe: "Équipe Inconnue",
  nationalite: "Nationalité Inconnue",
  numero: 0,
  age: "Âge Inconnu",
  imageUrl: "https://via.placeholder.com/150"
};

export default Player;
