import React, { useContext, useEffect, useState } from 'react'
import styles from './infoPage.module.scss'
import { Link, Outlet } from 'react-router-dom'
import { Context } from '../../context'
import IsHoveredOpt from '../../components/UI/isHoveredOpt/IsHoveredOpt'
import Loader from '../../components/UI/loader/Loader'

const InfoPage = () => {
	const context = useContext(Context)
	const profile = context.profile

	return (
		<div >
			<div style={{
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column'
			}}>
				<div className={styles.letter}>{profile.nickname[0]}</div>
				<p style={{ marginTop: 12, fontSize: 32, fontWeight: 500 }}>{profile.nickname}</p>
				<p style={{ marginTop: 12, fontSize: 14 }}>0 подписок</p>
				<div style={{
					display: 'flex',
					marginTop: 12,
					gap: 8
				}} >
					<div className={styles.btn}>Поделиться</div>
					<Link to={'/settings'} className={styles.btn}>Изменить профиль</Link>
				</div>
				<div className={styles.select}>
					<IsHoveredOpt prev='info' opt={{ name: 'созданные', path: 'created' }} />
					<IsHoveredOpt prev='info' opt={{ name: 'сохраненные', path: 'saved' }} />
				</div>
			</div>
			<div className={styles.outlet} >
				{
					context.loading ?
						<Loader /> :
						<Outlet />
				}
			</div>
		</div >
	)
}

export default InfoPage