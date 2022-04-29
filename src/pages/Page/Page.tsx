import {useDocumentTitle} from '@mantine/hooks'
import {observer} from 'mobx-react-lite'
import {FC, useContext, useEffect} from 'react'
import {HeaderContext} from '../../context'
import {postsState} from '../../store'
import {PostCategoryEnum} from '../../types'

interface Props {
	title: string
	Component: FC
	withCreateButton?: boolean
	postCategory?: PostCategoryEnum
}

export const Page: FC<Props> = observer(({title, Component, withCreateButton, postCategory}) => {
	useDocumentTitle(`${title} | ВГПУ`)
	const {setWithCreateButton} = useContext(HeaderContext)

	useEffect(() => {
		if (withCreateButton) {
			setWithCreateButton(true)
		}
		return () => {
			setWithCreateButton(false)
		}
	}, [withCreateButton])

	useEffect(() => {
		(async () => {
			if (postCategory) {
				await postsState.getPosts(postCategory)
			}
		})()
	}, [postCategory])

	return <Component/>
})
