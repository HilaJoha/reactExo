
import Header from './components/Header'
import Title from './components/Title'
import './App.css'


const App = () => {
  
  const List = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    
  ];

  return (
    <div>
      <Header />
      <Title />
    </div>


    );

}

export default App
