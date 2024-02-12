import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const API_1 = import.meta.env.VITE_APP_YOUTUBE_API_1
const API_2 = import.meta.env.VITE_APP_YOUTUBE_API_2

const options = {
    params: {
        maxResults: '50',
    },
    headers: {
        'X-RapidAPI-Key': API_2,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};