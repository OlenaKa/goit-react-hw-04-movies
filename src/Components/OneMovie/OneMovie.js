import PropTypes from "prop-types";
import "./OneMovie.css";
const OneMovie = ({ movie }) => {
  const { title, poster_path, overview, genres, vote_average } = movie;
  console.log(movie);
  return (
    <article className="movie-info">
      {poster_path && (
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={`poster of ${title}`}
        ></img>
      )}
      <ul className="info-list">
        <li>
          <h1> {title}</h1>
          <p>User Score: {vote_average * 10}%</p>
        </li>
        <li>
          <h2>Overview</h2>
          <p>{overview}</p>
        </li>
        {genres && (
          <li>
            <h2>Genres</h2>
            {genres.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </li>
        )}
      </ul>
    </article>
  );
};
export default OneMovie;

OneMovie.propTypes = {
  movie: PropTypes.object.isRequired,
};
