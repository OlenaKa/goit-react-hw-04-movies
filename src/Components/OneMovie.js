const OneMovie = ({ movie }) => {
  const { title, poster_path, overview, genres, vote_count } = movie;
  return (
    <article>
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={`poster of ${title}`}
        ></img>
      )}
      <ul>
        <li>
          <h2> {title}</h2>
          <p>User Score: {vote_count}</p>
        </li>
        <li>
          <h2>Overview</h2>
          <p>{overview}</p>
        </li>
        {genres && (
          <li>
            <h2>Genres</h2>
            {genres.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </li>
        )}
      </ul>
    </article>
  );
};
export default OneMovie;
