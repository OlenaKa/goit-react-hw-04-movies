import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomeViev from "./views/HomeView";
import MoviePage from "./views/MoviePage";
import MoviesSearch from "./views/MoviesView";
import Navigation from "./Components/Navigation";
import routes from "./routes";
function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path={routes.oneMovie} component={MoviePage} />
        <Route path={routes.moviesSearch} component={MoviesSearch} />
        <Route path={routes.home} component={HomeViev} />
      </Switch>
    </>
  );
}

export default App;
