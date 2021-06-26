import { Component } from "react";
import getMovies from "../API/Api_Servise";
class Cast extends Component {
  state = {};

  async componentDidMount() {
    console.log(this.props);
    const movieId = this.props.match.params.movieId;

    const result = await getMovies({ option: `/${movieId}/credits` });

    this.setState({
      casts: result.cast,
    });
  }
  render() {
    const { casts } = this.state;
    return (
      <>
        <ul>
          Casts
          {casts &&
            casts.map((cast) => (
              <li key={cast.cast_id}>
                {cast.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                    alt={`poster of ${cast.name}`}
                  ></img>
                )}
                <p>{cast.name}</p>
              </li>
            ))}
        </ul>
      </>
    );
  }
}
export default Cast;
