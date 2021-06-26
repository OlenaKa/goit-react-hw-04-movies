import { Component } from "react";
// import { Route, NavLink } from "react-router-dom"
import getMovies from "../API/Api_Servise";
// import Reviews from "../Components/Reviews"
// import Cast from "../Components/Cast"
import OneMovie from "../Components/OneMovie";
import AdditionalInfo from "../Components/AdditionalInfo";
import routes from "../routes";
class MoviePage extends Component {
  state = {};

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    const result = await getMovies({ option: `/${movieId}` });

    this.setState({ ...result });
  }

  onHandleBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    console.log(this.props);
    return (
      <>
        <button type="button" onClick={this.onHandleBack}>
          Go back
        </button>
        <OneMovie movie={this.state} />
        <AdditionalInfo id={this.state.id} />
      </>
    );
  }
}

export default MoviePage;
