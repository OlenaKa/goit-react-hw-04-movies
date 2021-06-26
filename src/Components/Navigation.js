import { NavLink } from "react-router-dom";
import routes from "../routes";
const Navigation = () => (
  <ul>
    <li>
      <NavLink to={routes.home}> Home</NavLink>
    </li>
    <li>
      <NavLink to={routes.moviesSearch}> Movies</NavLink>
    </li>
  </ul>
);

export default Navigation;
