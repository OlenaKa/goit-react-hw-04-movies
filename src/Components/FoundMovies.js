import { NavLink, withRouter } from "react-router-dom";

const FoundMovies = ({ movies, location }) => (
  <ul>
    {movies.map((movie) => (
      <li key={movie.id}>
        <NavLink
          to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}
        >
          {movie.title}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default withRouter(FoundMovies);
