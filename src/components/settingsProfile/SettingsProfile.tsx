import React, { useContext, useEffect, useState } from 'react'
import styles from './settingsProfile.module.scss'
import { Context } from '../../context'
import Button from '../UI/button/Button'

const SettingsProfile = () => {
	const context = useContext(Context)
	const [newProfile, setNewProfile] = useState({ ...context.profile })
	const [isChanged, setIsChanged] = useState(false)

	useEffect(() => {
		(newProfile.firstName !== context.profile.firstName && newProfile.firstName.length > 2) ||
			(newProfile.lastName !== context.profile.lastName && newProfile.lastName.length > 2) ||
			(newProfile.email !== context.profile.email && newProfile.email.length > 13) ||
			(newProfile.nickname !== context.profile.nickname && newProfile.nickname.length > 5) ?
			setIsChanged(true) :
			setIsChanged(false)
	}, [newProfile])

	return (
		<>
			<p style={{
				fontSize: 24,
				fontWeight: 600
			}}>Изменение профиля</p>
			<p style={{
				fontSize: 15, marginTop: 12
			}}>Позаботьтесь о конфиденциальности личных данных. Добавляемая вами информация видна всем, кто может просматривать ваш профиль.</p>
			<div style={{ display: 'flex', marginTop: 12, justifyContent: 'space-between' }}>
				<div style={{ width: 'calc(100% - 32px)' }} className={styles.divInp}>
					<p className={styles.fontName}>Имя</p>
					<input className={styles.input} value={newProfile.firstName} onChange={(e) => setNewProfile({ ...newProfile, firstName: e.target.value.split('').filter(i => i !== ' ').join('') })} />
				</div>
				<div style={{ width: 'calc(100% - 32px)' }} className={styles.divInp}>
					<p className={styles.fontName}>Фамилия</p>
					<input className={styles.input} value={newProfile.lastName} onChange={(e) => setNewProfile({ ...newProfile, lastName: e.target.value.split('').filter(i => i !== ' ').join('') })} />
				</div>
			</div>
			<div className={styles.divInp}>
				<p className={styles.fontName}>email</p>
				<input className={styles.input} value={newProfile.email} onChange={(e) => setNewProfile({ ...newProfile, email: e.target.value.split('').filter(i => i !== ' ').join('') })} />
			</div>
			<div className={styles.divInp}>
				<p className={styles.fontName}>Имя пользователя</p>
				<input className={styles.input} value={newProfile.nickname}
					onChange={(e) => setNewProfile({ ...newProfile, nickname: e.target.value.split('').filter(i => i !== ' ').join('') })}
				/>
			</div>
			<div style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				gap: 16
			}}>
				<Button type={isChanged ? 'red' : 'disabled'} onClick={() => {
					context.setProfile({ ...newProfile })
					setIsChanged(false)
				}}>Сохранить</Button>
				<Button type={isChanged ? 'red' : 'disabled'} onClick={() => {
					setNewProfile({ ...context.profile })
					setIsChanged(false)
				}}>сбросить</Button>
			</div>
		</>
	)
}

export default SettingsProfile