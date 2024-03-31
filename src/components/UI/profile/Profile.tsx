import React, { useContext } from 'react'
import styles from './profile.module.scss'
import { Link } from 'react-router-dom'
import { Context } from '../../../context'

const Profile = () => {
	const context = useContext(Context)
	const nickName = context.profile.nickname

	return (
		<Link to={'/info'} className={styles.main} >
			<div className={styles.background}>
				{nickName[0]}
			</div>
		</Link >
	)
}

export default Profile