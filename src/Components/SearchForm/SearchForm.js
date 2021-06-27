import { Component } from "react";

class SearchForm extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);

    this.setState({
      query: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange}></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
