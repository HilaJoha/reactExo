import { useState } from 'react'

import Header from './components/Header'
import Card from './components/Card'
//import InputLine from './components/InputLine'

import './App.css'

function App() {

  const poulettesListe = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    
  ];

  return (
    <div>
      <Card poulette={poulettesListe} />
      <Header />
      <Card />
    </div>


    );

}

export default App
