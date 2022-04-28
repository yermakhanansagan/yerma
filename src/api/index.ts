import axios from 'axios'

const API_URL = `http://86.107.198.77:8000/api/`

export const $api = axios.create({
	baseURL: API_URL,
})

$api.interceptors.request.use(config => {
	config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config
})
