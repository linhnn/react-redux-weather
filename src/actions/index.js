import axios from 'axios';

const API_KEY = '397136ea476d1fa7b51491966133d6f2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},vn`;
    const request = axios.get(url);

    return {
      type: FETCH_WEATHER,
      payload: request
    }
}
