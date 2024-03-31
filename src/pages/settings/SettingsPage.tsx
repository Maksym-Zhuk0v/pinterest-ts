import React, { useState } from 'react'
import styles from './settingsPage.module.scss'
import { Outlet } from 'react-router-dom'
import IsHoveredOpt from '../../components/UI/isHoveredOpt/IsHoveredOpt'
import Edit from '../../components/UI/edit/Edit'

const SettingsPage = () => {
	const [burger, setBurger] = useState(false)

	const paths = [
		{ name: 'Изменение профиля', path: 'profile' },
		{ name: 'Управление аккаунтом', path: 'account-settings' },
		{ name: 'Видимость профиля', path: 'profile-visibility' },
		{ name: 'Настроить ленту', path: 'edit' },
		{ name: 'Подтвержденные аккаунты', path: 'claim' },
		{ name: 'Разрешения для сообщества', path: 'permissions' },
		{ name: 'Уведомления', path: 'notifications' },
		{ name: 'Конфиденциальность и данные', path: 'privacy' },
		{ name: 'Безопасность', path: 'security' },
		{ name: 'Контент бренда', path: 'branded-content' },
	]

	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
		}} >
			<div className={styles.main}>
				<div className={styles.burger}>
					<Edit burger={burger} onClick={() => setBurger(state => !state)} type={'burger'} />
				</div>
				<div className={[styles.sidebar, burger ? styles.active : ''].join(' ')}  >
					{
						paths.map(obj => <IsHoveredOpt onClick={() => setBurger(false)} prev='settings' key={obj.name} opt={obj} />)
					}
				</div>
				<div style={{
					width: 790, display: 'flex', justifyContent: 'center',
				}}>
					<div className={styles.content}  >
						<Outlet />
					</div>
				</div>
			</div>
		</div >
	)
}

export default SettingsPage