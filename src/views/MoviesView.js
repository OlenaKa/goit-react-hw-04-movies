import { Component } from "react";
import getMovies from "../API/Api_Servise";
import FoundMovies from "../Components/FoundMovies";
import SearchForm from "../Components/SearchForm";
import ErrorMsg from "../Components/ErrorMsg";

class MoviesSearch extends Component {
  state = {
    query: "",
  };

  async componentDidMount() {
    if (this.props.location.search) {
      const searchQuery = this.props.location.search.slice(1);
      const result = await this.runSearch(searchQuery);

      this.setState({
        movies: result,
        query: searchQuery,
      });
    }
  }

  handleSubmit = async (searchQuery) => {
    const result = await this.runSearch(searchQuery);

    this.setState({
      movies: result,
      query: searchQuery,
    });
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: searchQuery,
    });
  };

  runSearch = async (searchQuery) => {
    try {
      return await getMovies({
        key: "search",
        options: {
          query: `${searchQuery}`,
          page: 1,
        },
      });
    } catch (err) {
      this.setState({
        error: "something",
      });
    }
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />
        {this.state.movies && <FoundMovies movies={this.state.movies} />}
        {this.state.error && <ErrorMsg />}
      </>
    );
  }
}

export default MoviesSearch;
