import axios from "axios";

const KEY = "AIzaSyCnOAwawkJB0Qjve6pWHuGDjQWmAfMZvlQ";

export const API_DEFAULT_PARAMS = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

//https://developers.google.com/youtube/v3/docs/search/list
