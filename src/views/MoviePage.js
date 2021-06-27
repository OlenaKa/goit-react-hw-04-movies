import { Component } from "react";
import getMovies from "../API/Api_Servise";
import OneMovie from "../Components/OneMovie";
import AdditionalInfo from "../Components/AdditionalInfo";
import routes from "../routes";
import ErrorMsg from "../Components/ErrorMsg";
class MoviePage extends Component {
  state = {};

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    try {
      const result = await getMovies({ option: `/${movieId}` });
      this.setState({ ...result });
    } catch (err) {
      this.setState({
        error: "something",
      });
    }
  }

  onHandleBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    return (
      <>
        <button
          type="button"
          onClick={this.onHandleBack}
          className="goBack-btn"
        >
          Go back
        </button>
        <OneMovie movie={this.state} />
        <AdditionalInfo id={this.state.id} />
        {this.state.error && <ErrorMsg />}
      </>
    );
  }
}

export default MoviePage;
