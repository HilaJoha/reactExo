import React, { useState } from 'react';
import Header from './components/Header';
import Title from './components/Title';
import './App.css'
import Card from './components/Card';



  const App = () => {


    const batList = [
      {
        name: "Bat Ass",
        imgSrc: "https://www.1zoom.me/big/31/54334-belka.jpg", 
        id: 1,
        age: "30", 
        sexe: "Mâle", 
        taille: "XS", 
        poids: "plume",
        color: "#fd01a4",
      },
      {
        name: "Bat Mitzvah",
        imgSrc: "https://e0.pxfuel.com/wallpapers/218/414/desktop-wallpaper-bats-animals-black-background-animal-bat.jpg", 
        id: 2,
        age: "2",
        sexe: "Femelle",
        taille: "S",
        poids: "Moyen",
        color:"#00d989",
        },
      
      {
        name: "Bat Aille",
        imgSrc: "https://www.mediastorehouse.com/p/729/neotropical-fruit-bat-artibeus-intermedius-24139625.jpg.webp",
        id: 3,
        age: "45",
        sexe: "Femelle",
        taille: "XXL",
        poids: "Lourd",
        color:"#f5d300",
      },
      {
        name: "Bat Woman",
        imgSrc: "https://www.akronzoo.org/sites/default/files/styles/square_large/public/assets/animals/Straw-colored-bat-main.png?h=00546c34&itok=PL46FTnk",
        id: 4,
        age: "8",
        sexe: "Femelle",
        taille: "M",
        poids: "Moyen",
        color: "#ce74e2"
      },
      {
        name: "Bat Tons-nous",
        imgSrc: "https://www.merlintuttle.org/home/vespertilionidae-brown-long-eared-bat-plecotus-auritus-2/",
        id: 5,
        age: "8",
        sexe: "Mâle",
        taille: "XL",
        poids: "Lourd",
        color:"#e52000",
      },
      {
        name: "Bat Ref",
        imgSrc: "https://www.nps.gov/articles/images/PallidbatCapitolReedNP.jpg?maxwidth=1300&autorotate=false",
        id: 6,
        age: "4",
        sexe: "Mâle",
        taille: "S",
        poids: "Léger",
        color:"#ff6600"
      },
      {
        name: "Bat Bye",
        imgSrc: "https://images.theconversation.com/files/445412/original/file-20220209-25-wpmyla.jpeg?ixlib=rb-1.1.0&rect=0%2C0%2C3003%2C1994&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
        id: 7,
        age: "23",
        sexe: "Mâle",
        taille: "L",
        poids: "Moyen",
        color:"#266d07",
      },
      {
        name: "Bat de Baseball",
        imgSrc: "https://files.worldwildlife.org/wwfcmsprod/images/bat_54362.jpg/blog_show/3au37l0hbm_bat_54362.jpg",
        id: 8,
        age: "56",
        sexe: "femelle",
        taille: "S",
        poids: "Léger",
        color:"#4073ff",
      }
     
    ];
  
   
  const [filter, setFilter] = useState('');

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const filteredBatList = batList.filter(
    (bat) => filter === '' || bat.sexe.toLowerCase() === filter.toLowerCase()
  );

  return (
    <div>
      <Header />
      <Title />
     
      <div className="card-container">
        {filteredBatList.map((bat, index) => (
          <Card key={index} bat={bat} />
        ))}
      </div>
    </div>
  );
};

export default App;