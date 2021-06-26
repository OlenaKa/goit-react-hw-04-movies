import Axios from "axios";
// const API_KEY = '1c8707fc5a1aa662ec9b9c5ea145f96c'
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzg3MDdmYzVhMWFhNjYyZWM5YjljNWVhMTQ1Zjk2YyIsInN1YiI6IjYwZDIxNWVjYzlkYmY5MDA0NWE2YTNmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kAwHzDj4sIIQI99JLAp4aqtoVop42uuoO8Yo_0F0TPI";
// const baseURL = 'https://api.themoviedb.org/3/'
Axios.defaults.baseURL = "https://api.themoviedb.org/3";
Axios.defaults.headers.common["Authorization"] = `Bearer ${API_TOKEN}`;

async function getMovies(params) {
  let result = [];
  if (params.key === "search") {
    result = await Axios.get(`${params.key}/movie`, {
      params: params.options,
    });
  } else {
    const path = `${params?.key || ""}/movie${params?.option}`;
    result = await Axios.get(path);
  }

  return result?.data?.results || result?.data;
}

export default getMovies;
