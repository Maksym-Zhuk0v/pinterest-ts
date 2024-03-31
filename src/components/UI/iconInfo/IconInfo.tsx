import React, { useEffect, useState } from 'react'
import styles from './iconInfo.module.scss'
import { IPin } from '../../../models'
import { Link, useNavigate } from 'react-router-dom'

interface IIconInfo {
	pin: IPin | string
}

const IconInfo = ({ pin }: IIconInfo) => {
	const [hovered, setHovered] = useState(false)
	const navigate = useNavigate()

	return (
		<div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={styles.main} onClick={() => typeof pin !== 'string' ? navigate(`/pin/${pin.id}`) : ''} >
			<div className={styles.img} style={{ backgroundImage: typeof pin !== 'string' ? `url(${pin.image})` : '' }} />
			<div className={styles.shadow} style={{ opacity: hovered ? '30%' : 0 }} />
		</div>
	)
}

export default IconInfo