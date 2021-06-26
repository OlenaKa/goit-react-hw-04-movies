import { Route, NavLink, withRouter } from "react-router-dom";
import Reviews from "../Components/Reviews";
import Cast from "../Components/Cast";
import routes from "../routes";
const AdditionalInfo = ({ id, location }) => (
  <>
    <NavLink
      to={{
        pathname: `/movies/${id}/cast`,
        state: { from: location.state.from },
      }}
    >
      Cast
    </NavLink>
    <NavLink
      to={{
        pathname: `/movies/${id}/reviews`,
        state: { from: location.state.from },
      }}
    >
      Reviews
    </NavLink>
    <Route path={routes.cast} component={Cast} />
    <Route path={routes.reviews} component={Reviews} />
  </>
);

export default withRouter(AdditionalInfo);
