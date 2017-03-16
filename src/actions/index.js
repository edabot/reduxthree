const API_KEY = 'fa2389bfc36045ee90341d7f6c616759';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?app_id=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&=${city},us`;
    
    return {
        type: FETCH_WEATHER
    }
}
