import React, { useContext, useState } from 'react'
import styles from './info.module.scss'
import Option from '../option/Option'
import Close from '../close/Close'
import { Link } from 'react-router-dom'
import { Context } from '../../../context'

const Info = () => {
	const [active, setActive] = useState(false)
	const context = useContext(Context)
	const name = context.profile.nickname

	const myOptions = [
		{ name: 'Добавить аккаунт', to: '/add-account' },
		{ name: 'Перейти на бизнес-аккаунт', to: '/go-to-BA' },
	]

	const additionally = [
		{ name: 'Настройки', to: '/settings' },
		{ name: 'Настроить ленту', to: '/configure-feed' },
		{ name: 'Установить приложение Chrome', to: '/install-chrome' },
		{ name: 'Ваши права на конфиденциальность', to: '/privacy-rights' },
		{ name: 'Получить справку', to: '/get-help' },
		{ name: 'Просмотреть условия', to: '/view-terms' },
		{ name: 'Просмотреть политику', to: '/view-policy' },
		{ name: 'Стать бета-тестером', to: '/become-beta-tester' },
		{ name: 'Выход', to: '/log-out' },
	]

	return (
		<div className={styles.main}>
			<div onClick={() => setActive(true)} className={styles.icon}>
				<div className={styles.arrow} />
			</div>
			{active && <div className={styles.modal}>
				<p className={styles.text}>Сейчас:</p>
				<Link onClick={() => setActive(false)} to={'/info'} className={styles.info}>
					<div className={styles.infoLetter}>{name[0]}</div>
					<div>
						<p style={{ fontWeight: 600 }}>{name}</p>
						<p className={styles.infoText}>личный</p>
						<p className={styles.infoText}>{context.profile.email.slice(0, 24)}</p>
					</div>
				</Link>
				<p className={styles.text}>Ваши аккаунты</p>
				{myOptions.map(opt => <Option key={opt.name} onClick={() => setActive(false)} value={opt.to} name={opt.name} />)}
				<p className={styles.text}>Дополнительно</p>
				{additionally.map(opt => <Option key={opt.name} onClick={() => setActive(false)} value={opt.to} name={opt.name} />)}
			</div>}
			<Close active={active} setActive={setActive} />
		</div >
	)
}

export default Info