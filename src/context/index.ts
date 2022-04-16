import {createContext} from 'react'
import {IHeaderContext} from '../types'

export const HeaderContext = createContext<IHeaderContext>({
	withCreateButton: false,
	setWithCreateButton: () => {
	},
})
