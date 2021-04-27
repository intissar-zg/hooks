import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import { useState } from 'react';
import AddMovie from './AddMovie';
import Filter from './Filter';
import Rating from './Rating'

function App() {
  const [Movies, setMovies] = useState([
    {
    id:"1",
    title:"Blanche-Neige et les Sept Nains",
    description: "Blanche Neige est une très jolie princesse. Sa belle-mère, la Reine, sentant qu'un jour la beauté de Blanche Neige dépasserait la sienne donne l'ordre à son garde chasse de la tuer. N'ayant pas le courage d'exécuter ses ordres, il l'abandonne dans la forêt.",
    PosterURL:"blanche-neige.jpg",
    rating:5

  },
  {
    id:"2",
    title:"Cendrillon",
    description: "Cendrillon, une douce jeune fille, subit les méchancetés de sa belle-mère et de ses deux horribles filles. Un jour, transformée par sa marraine la bonne fée en princesse éclatante de beauté, elle se rend au bal du prince qui tombe fou amoureux d'elle",
    PosterURL:"cendrillon.jpg",
    rating:4

  },
  {
    id:"3",
    title:"Alice au pays des merveilles",
    description: "Alice, jeune fille rêveuse, durant son cours d'histoire, s'évade dans un monde étrange dans lequel des fleurs chantantes côtoient un cheval volant, une chenille fumeuse, une reine jouant du crocket, ou un lapin tachant de ne pas être en retard.",
    PosterURL:"Alice.jpg",
    rating:3

  }]);
   const handleMovieAdd=(newvalue)=>{
    setMovies([...Movies,newvalue])
  } 
  const [search, setsearch] = useState("")
  const searchhandle=(search)=>{
    setsearch(search)
/*     if(search!=="")
{
  const NewMovie=Movies.filter((el)=>{
    el.join("").toLowerCase().includes(search.toLowerCase); 
  })
  setsearchResult(NewMovie);
}else{
  setsearchResult(Movies)
} */
  } 
  const [searchResult, setsearchResult] = useState("")
  const  [rate, setrate] = useState(0)
  const handleRate=(rate)=>{
    setrate(rate)
  }


  return (
    <div className="App">
     <div className="Flex">
   <Filter search={search}   searchkey={searchhandle} ></Filter> 
      
      <Rating handleRate={handleRate} rate={rate} setrate={setrate}></Rating></div>
  
      <MovieList Movies={Movies.filter(el=>el.title.toLowerCase().includes(search.toLowerCase())&& el.rating>=rate)}></MovieList>
      <AddMovie handleMovieAdd={handleMovieAdd}></AddMovie>
    </div>
  );
}

export default App;
