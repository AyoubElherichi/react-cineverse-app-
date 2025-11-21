import { useState } from "react";
import { Link } from "react-router-dom";
import movies from "../data/MoviesDetails";
import "../App.css";

export default function Home() {
  const [films] = useState(movies);
  const [startIndex, setStartIndex] = useState(0);
  const handleNext = () => {
    if (startIndex + 4 < films.length) {
      setStartIndex(startIndex + 4);
    } else {
      setStartIndex(0); 
    }
  };
  const handlePrev = () => {
    if (startIndex - 4 >= 0) {
      setStartIndex(startIndex - 4);
    }
  };

  const visibleFilms = films.slice(startIndex, startIndex + 4);

  return (
    <div>
      <div class="hero-container">
        <Link className="Hero" to="/MoviesDetails/public/Home-image.jpg">
          <img className="Hero" src="/public/Home-image.jpg" alt="Hero" />
        </Link>
        <div class="TitleHome">
        <h2>Mission Impossible</h2>
        <h5>Dead Reckoning (Part One)</h5>
        </div>
      </div>

      <div className="section-header">
        <h3>ONLINE STREAMING</h3>
        <h1>Watch Shows Online</h1>
      </div>
      <div className="slider-container">
        <div className="movieCard">
          {visibleFilms.map((film) => (
            <Link
              key={film.id}
              to={`/MovieDetails/${film.id}`}
              className="movieLink">
              <img className="card-image" src={film.image} alt={film.title} />
              <h3>{film.title}</h3>
            </Link>
          ))}
        </div>

      
        <div className="slider-controls">
           {startIndex > 0 && (
             <button onClick={handlePrev} className="nav-btn">
               &lt; Prev
             </button>
           )}
           
           <button onClick={handleNext} className="nav-btn">
             Next &gt;
           </button>
        </div>

      </div>
    </div>
  );
  
}