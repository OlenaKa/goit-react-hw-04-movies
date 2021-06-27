import { Component } from "react";
import getMovies from "../../API/Api_Servise";
import NotFound from "../NotFound";
class Reviews extends Component {
  state = {};
  async componentDidMount() {
    const movieId = this.props.match.params.movieId;

    const result = await getMovies({ option: `/${movieId}/reviews` });

    result.length > 0 &&
      this.setState({
        reviews: result,
      });
  }
  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews ? (
          <ul>
            {this.state.reviews.map((review) => (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <NotFound />
        )}
      </>
    );
  }
}
export default Reviews;
