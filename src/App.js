import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Spinner from "./Components/Spinner";
// import HomeViev from "./views/HomeView"
// import MoviePage from "./views/MoviePage"
// import MoviesSearch from "./views/MoviesView"
import Navigation from "./Components/Navigation";
import routes from "./routes";
const HomeView = lazy(
  () => import("./views/HomeView.js") /* webpackChunkName: "home-view"*/
);
const MoviePage = lazy(
  () => import("./views/MoviePage.js") /* webpackChunkName: "movie-page"*/
);
const MoviesSearch = lazy(
  () => import("./views/MoviesView.js") /* webpackChunkName: "movies-view"*/
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={routes.oneMovie} component={MoviePage} />
          <Route path={routes.moviesSearch} component={MoviesSearch} />
          <Route path={routes.home} component={HomeView} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
