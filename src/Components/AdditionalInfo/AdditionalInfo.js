import "./AdditionalInfo.css";
import PropTypes from "prop-types";
import { Route, NavLink, withRouter } from "react-router-dom";
import Reviews from "../Reviews";
import Cast from "../Cast";
import routes from "../../routes";
const AdditionalInfo = ({ id, location }) => (
  <>
    <div className="additional-info">
      <h2>Additional Information</h2>
      <NavLink
        to={{
          pathname: `/movies/${id}/cast`,
          state: { from: location.state.from },
        }}
        className="NavLink"
        activeClassName="NavLink_active"
      >
        Cast
      </NavLink>
      <NavLink
        to={{
          pathname: `/movies/${id}/reviews`,
          state: { from: location.state.from },
        }}
        className="NavLink"
        activeClassName="NavLink_active"
      >
        Reviews
      </NavLink>
    </div>
    <Route path={routes.cast} component={Cast} />
    <Route path={routes.reviews} component={Reviews} />
  </>
);

export default withRouter(AdditionalInfo);

AdditionalInfo.propTypes = {
  id: PropTypes.number,
  location: PropTypes.object.isRequired,
};
