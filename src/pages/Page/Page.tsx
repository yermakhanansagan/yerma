import {useDocumentTitle} from '@mantine/hooks'
import {FC, useContext, useEffect} from 'react'
import {HeaderContext} from '../../context'

interface Props {
	title: string
	Component: FC
	withCreateButton?: boolean
}

export const Page: FC<Props> = ({title, Component, withCreateButton}) => {
	useDocumentTitle(title)
	const {setWithCreateButton} = useContext(HeaderContext)

	useEffect(() => {
		if (withCreateButton) {
			setWithCreateButton(true)
		}
		return () => {
			setWithCreateButton(false)
		}
	}, [withCreateButton])

	return <Component/>
}
