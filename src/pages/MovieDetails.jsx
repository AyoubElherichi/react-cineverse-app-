import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/MoviesDetails";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));
  /*   const [team] = useState(movies.team) */

  return (
    <>
      <div className="Detail-page">
        <img src={movie.image} className="imageDetail" />
        <div className="discContainer">
          <button className="returnBtn" onClick={() => {navigate("/")}}>Retour</button>
          <div className="MovieInfo">
            <h2>
              Titre du film:<span>{movie.title}</span>
            </h2>
            <h2>
              Date de sortie:<span>{movie.year}</span>
            </h2>
            <div className="description-container">
            <h2 className="description">Court description du film:</h2>
            <h4>{movie.description}</h4>
            </div>
          </div>
          <div className="team">
            <h2> Équipe</h2>
            <div className="photoContainer">
              {movie.team.map((team) => (
                <div className="PhotoTile">
                  <img src={team.photo} alt={team.name} className="photo" />
                  <h4>{team.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
