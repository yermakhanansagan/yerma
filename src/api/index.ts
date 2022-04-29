import axios from 'axios'
import {AuthService} from '../services'
import {authState} from '../store'

const API_URL = `http://86.107.198.77:8000/api/`

export const $api = axios.create({
	baseURL: API_URL,
})

$api.interceptors.request.use(
	config => {
		const token = localStorage.getItem('accessToken')
		config.headers!.Authorization = `Bearer ${token}`
		return config
	},
	error => Promise.reject(error),
)

$api.interceptors.response.use(
	response => response.data,
	async error => {
		const refreshToken = localStorage.getItem('refreshToken')
		if (error.response.status === 401 && refreshToken && refreshToken !== 'undefined') {
			try {
				const {access, refresh} = await AuthService.refreshToken(refreshToken)
				console.log(refresh)
				localStorage.setItem('accessToken', access)
				localStorage.setItem('refreshToken', refresh)
				return $api(error.config)
			} catch (err) {
				authState.logout()
				return Promise.reject(err)
			}
		}
		return Promise.reject(error)
	},
)
