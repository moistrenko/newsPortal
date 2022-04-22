import axios, {AxiosResponse, AxiosRequestConfig} from "axios";

const getNews = (): Promise<AxiosResponse> => {
	const options: AxiosRequestConfig = {
		method: 'GET',
		url: 'https://free-news.p.rapidapi.com/v1/search',
		params: {q: 'Elon Musk', lang: 'en'},
		headers: {
		  'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
		  'X-RapidAPI-Key': 'f0ffb1ab5bmsh25d5f1be5be3b59p125b5bjsn5c0c3913239c'
		}
	  };

	return axios.request(options)
}

export default getNews;