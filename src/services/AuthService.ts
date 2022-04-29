import {$api} from '../api'
import {ILogin, IToken, IUser} from '../types'

export class AuthService {
	static async login(data: ILogin): Promise<IToken> {
		return $api.post('users/token/', data)
	}

	static async refreshToken(refreshToken: string): Promise<IToken> {
		return $api.post('users/token/refresh/', {refresh: refreshToken})
	}

	static async getUserInfo(): Promise<IUser> {
		return $api.get('users/me/')
	}

	static async register(): Promise<null> {
		return $api.post('')
	}
}
