const url = process.env.REACT_APP_SERVER_ADDRESS
const key = process.env.REACT_APP_KEY_V3

const moviesNowPlaying = `${url}movie/now_playing?api_key=${key}&language=en-US&page=1`


export {
  moviesNowPlaying
}