import "./Navigation.css";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
const Navigation = () => (
  <div className="nav-container">
    <ul className="nav-list">
      <li>
        <NavLink
          exact
          to={routes.home}
          className="NavLink"
          activeClassName="NavLink_active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.moviesSearch}
          className="NavLink"
          activeClassName="NavLink_active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navigation;
