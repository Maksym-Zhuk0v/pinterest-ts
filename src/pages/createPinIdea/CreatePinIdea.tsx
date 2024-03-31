import React, { useContext, useEffect, useState } from 'react'
import styles from './createPinIdea.module.scss'
import Button from '../../components/UI/button/Button'
import { Context } from '../../context'
import { useLocation, useNavigate } from 'react-router-dom'

const CreatePinIdea = () => {
	const [pinIdeaName, setPinIdeaName] = useState('')
	const context = useContext(Context)
	const themes = context.themes
	const setThemes = context.setThemes
	const location = useLocation()
	const navigate = useNavigate()

	return (
		<div className={styles.main}>
			<p className={styles.title}>Создать пин идею</p>
			<div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
				<input placeholder='Введите название новой темы' className={styles.input} onChange={(e) => setPinIdeaName(e.target.value.trim())} value={pinIdeaName} />
				<Button onClick={() => {
					if (!themes.map(t => t.toLocaleLowerCase()).includes(pinIdeaName.toLocaleLowerCase()) && pinIdeaName.length > 3) {
						setThemes([...themes, pinIdeaName])
						navigate(location?.state?.cameFrom, { state: { newIdea: pinIdeaName } })
						setPinIdeaName('')
					}
				}} type={'red'}>Создать</Button>
			</div>
		</div>
	)
}

export default CreatePinIdea