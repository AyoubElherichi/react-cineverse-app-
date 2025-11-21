import { useState } from "react";
import { Link } from "react-router-dom";
import movies from "../data/MoviesDetails";

export default function Home() {
  const [films] = useState(movies);

  return (
    <div>
      <div>
        <Link className="Hero" to="/MoviesDetails/public/Home-image.jpg">
          <img src="/public/Home-image.jpg" alt="Mission Impossibke" />
        </Link>

        <div>
          <h3>ONLINE STREAMING</h3>
          <h1>Watch Shows Online</h1>
        </div>
      </div>

      <div className="movieCard">
        {films.map((film) => (
          <Link
            key={film.id}
            to={`/MovieDetails/${film.id}`}
            className="movieLink"
          >
            <img className="test" src={film.image} alt={film.title} />
            <h3>{film.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
