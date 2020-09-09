import React,{useState, useEffect} from 'react';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import './App.css';
import Axios from "axios";

function App() {
  
  const [search, setSearch] = useState("cherry");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = '30fa223a';
  const APP_KEY = '5510829d5b983e7942ceb2402a896f31';

  const onInputChange = e => {
    setSearch(e.target.value)
  }

  useEffect(()=> {
    getRecipes();
},[]);

 const getRecipes = async ()=> {
  const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  setRecipes(res.data.hits);
 }

const onSearchClick = () => {
  getRecipes();
}

  return (
    <div className="App">
     <Header search={search} 
     onInputChange = {onInputChange} 
     onSearchClick = {onSearchClick}/>

     <div className ="container">
     <Recipes recipes={recipes}/>
     </div>
     
    </div>
  );
}

export default App;
