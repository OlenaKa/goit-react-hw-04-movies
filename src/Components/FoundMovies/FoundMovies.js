import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

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

FoundMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
