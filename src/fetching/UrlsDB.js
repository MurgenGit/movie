const url = process.env.REACT_APP_SERVER_ADDRESS
const key = process.env.REACT_APP_KEY_V3

// static routes
const moviesNowPlaying = `${url}movie/now_playing?api_key=${key}&language=en-US&page=1`
const imgURL = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/`

//dinamic routes
const getMovieUrl = id => `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY_V3}&language=en-US`

export {
  moviesNowPlaying,
  imgURL,
  getMovieUrl
}