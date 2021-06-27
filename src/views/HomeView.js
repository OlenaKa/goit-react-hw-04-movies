import { Component } from "react";
import getMovies from "../API/Api_Servise";
import FoundMovies from "../Components/FoundMovies";
import ErrorMsg from "../Components/ErrorMsg";

class HomeViev extends Component {
  state = {};

  async componentDidMount() {
    try {
      const result = await getMovies({ key: "trending", option: "/day" });
      this.setState({ trendingMovies: result });
    } catch (err) {
      this.setState({
        error: "something",
      });
    }
  }

  render() {
    return (
      <>
        {this.state.trendingMovies && (
          <>
            <h1>Trending today</h1>
            <FoundMovies movies={this.state.trendingMovies} />
          </>
        )}
        {this.state.error && <ErrorMsg />}
      </>
    );
  }
}

export default HomeViev;
