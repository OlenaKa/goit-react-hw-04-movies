import { Component } from "react";
import getMovies from "../API/Api_Servise";
import FoundMovies from "../Components/FoundMovies";

class HomeViev extends Component {
  state = {
    trendingMovies: [],
  };

  async componentDidMount() {
    const result = await getMovies({ key: "trending", option: "/day" });
    this.setState({ trendingMovies: result });
  }

  render() {
    return (
      <>
        <h1>Trending today</h1>
        <FoundMovies movies={this.state.trendingMovies} />
      </>
    );
  }
}

export default HomeViev;
