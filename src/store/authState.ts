import {makeAutoObservable} from 'mobx'
import {AuthService} from '../services'
import {ILogin, IUser} from '../types'

export class AuthState {
	user: IUser | null

	constructor() {
		makeAutoObservable(this)
		this.user = null
	}

	setUser(user: IUser | null) {
		this.user = user
	}

	async login(values: ILogin) {
		const {access, refresh} = await AuthService.login(values)
		localStorage.setItem('accessToken', access)
		localStorage.setItem('refreshToken', refresh)
		await this.getUserData()
	}

	logout() {
		this.setUser(null)
		localStorage.removeItem('accessToken')
		localStorage.removeItem('refreshToken')
	}

	async getUserData() {
		try {
			const user = await AuthService.getUserInfo()
			this.setUser(user)
		} catch (err) {
			this.logout()
		}
	}
}
