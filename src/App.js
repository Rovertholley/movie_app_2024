import { useEffect, useState } from "react";


function App() {
const [loading,setLoading] = useState(true);
const [movies,setmovies] = useState([]);
const getMovies = async() =>{
  const json = await 
    (await fetch(
    `https://yts.mx/api/v2/list_movies.json?minimum_rating={}&sort_by=year`
  )).json();  
  setmovies(json.data.movies);
  setLoading(false);
};
useEffect(() =>{
  getMovies();
},[]);

  

console.log(loading);
  return <div>
    <h1>The movies! ({movies.length})</h1>
    ({loading ? 
    <strong>"loading,,,"</strong> 
    :
    <div>
      {movies.map((movie)=>(
        <div key={movie.id}>
          <img src={movie.medium_cover_image}></img>
          <h2>{movie.title}</h2>
          <p>{movie.summary}</p>
          
          <ul>
            {movie.genres.map((g) =>
             <li>{g}</li>
            )}
          </ul>
        </div>
      ))}
    </div>
     })
  </div>;
    

    }
    export default App;
