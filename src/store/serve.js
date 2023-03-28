import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const env = {
  RAPIDAPI_KEY: process.env.RAPIDAPI_KEY,
  RAPIDAPI_HOST: process.env.RAPIDAPI_HOST,
};

const fetchIndiaTimeline = async () => {
  const options = {
    method: "GET",
    url: "https://corona-virus-world-and-india-data.p.rapidapi.com/api_india_timeline",
    headers: {
      "X-RapidAPI-Key": env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": env.RAPIDAPI_HOST,
    },
  };
  // eslint-disable-next-line
  const response = await axios(options);
  return response;
};

const fetchCorona = async () => {
  const options = {
    method: "GET",
    url: "https://corona-virus-world-and-india-data.p.rapidapi.com/api",
    headers: {
      "X-RapidAPI-Key": env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": env.RAPIDAPI_HOST,
    },
  };
  // eslint-disable-next-line
  const response = await axios(options);
  return response;
};
export { fetchCorona, fetchIndiaTimeline, env };
