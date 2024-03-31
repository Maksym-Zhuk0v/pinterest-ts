import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../../context'
import Loader from '../../components/UI/loader/Loader'
import Content from '../../components/content/Content'
import InfoZoomed from '../../components/infoZoomed/InfoZoomed'
import styles from './zoomedPin.module.scss'

const ZoomedCard = () => {
	const navigate = useNavigate()
	const context = useContext(Context)
	const data = context.pins
	const { id } = useParams()
	const card = data.find(item => item.id === id)
	if (!card) {
		navigate('/')
	}

	return (
		<div className={styles.main}>
			<div onClick={() => navigate(-1)} className={styles.arrowBack} >
				<div className={styles.arrow} />
			</div>
			<div className={styles.ZoomedCard}>
				{
					!card ?
						<Loader /> :
						<div className={styles.card}>
							<div className={styles.imgBlock}>
								<img src={card.image} className={styles.img} />
							</div>
							<div className={styles.infoZoomed}>
								<InfoZoomed pin={card} />
							</div>
						</div>
					// {/* <div className={styles.card}>
					// <div className={styles.imgBlock}>
					// 	<img src={card.image} className={styles.img} />
					// </div>
					// <InfoZoomed pin={card} />
					// </div> */}
				}
			</div>
			<p style={{
				textAlign: "center",
				fontSize: "22px",
				fontWeight: "600",
				padding: "24px"
			}} >Другие интересные пины</p>
			<Content data={data.filter(item => item.id !== id)} />
		</div>
	)
}

export default ZoomedCard