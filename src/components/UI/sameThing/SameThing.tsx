import React, { useContext, useState } from 'react'
import styles from './sameThemes.module.scss'
import { Context } from '../../../context'
import { Link } from 'react-router-dom'
import { IPin } from '../../../models'

interface ISameThemes {
	pin: IPin
}

const SameThemes = ({ pin }: ISameThemes) => {
	const context = useContext(Context)
	const data = context.pins
	const [hovered, setHovered] = useState<string[]>([])
	const theme = data.filter(item => item.sort === pin.sort)

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	return (
		<div
			style={{ width: '100%', overflowX: 'auto', whiteSpace: 'nowrap' }}
			className={styles.main}>
			{
				theme.filter(item => item !== pin).map(item => {
					return (
						<Link onClick={() => {
							scrollToTop()
						}} to={`/pin/${item.id}`} onMouseEnter={() => setHovered([item.id])} onMouseLeave={() => setHovered([])} className={styles.card} key={item.id}>
							<img className={styles.img} src={item.image} height={"100%"} />
							<div className={styles.shadow} style={{
								display: hovered.includes(item.id) ? "block" : "none"
							}} />
						</Link>
					)
				})
			}
		</div>
	)
}

export default SameThemes