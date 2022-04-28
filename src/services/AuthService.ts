import {$api} from '../api'
import {AxiosPromise} from '../types'

export class AuthService {
	static async login(email: string, password: string): AxiosPromise {
		return $api.post('users/token/', {email, password})
	}

	static async register(): AxiosPromise {
		return $api.post('')
	}
}
