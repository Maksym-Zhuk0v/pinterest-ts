import React, { useContext, useState } from 'react'
import styles from './infoZoomed.module.scss'
import SameThemes from '../UI/sameThing/SameThing'
import { IPin } from '../../models'
import Button from '../UI/button/Button'
import Edit from '../UI/edit/Edit'
import Select from '../UI/select/Select'
import { Context } from '../../context'

interface IInfoZoomed {
	pin: IPin
}

const InfoZoomed = ({ pin }: IInfoZoomed) => {
	const [active, setActive] = useState(false)
	const context = useContext(Context)

	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<div className={styles.headerLeft}>
					<Edit type={"comm"} />
				</div>
				<div style={{
					display: 'flex'
				}} className={styles.headerRight}>
					<Select options={[
						{ name: "#", to: "/" }
					]}>Профиль</Select>
					<Button onClick={() => {
						context.saved.includes(pin.id) ?
							context.setSaved(context.saved.filter(i => i !== pin.id)) :
							context.setSaved([...context.saved, pin.id])
					}} type={"red"}>{context.saved.includes(pin.id) ? 'Удалить' : 'Сохранить'}</Button>
				</div>
			</div>
			<div className={styles.main}>
				<p className={styles.name}>{pin.name}</p>
				<div className={styles.titleBlock} style={{ height: active ? "auto" : "30px" }}>
					<div>
						<p style={{
							fontSize: "18px",
							fontWeight: "700"
						}}>Описание:</p>
						<p className={styles.title} >{pin.title}</p>
					</div>
					<div>
						<div onClick={() => setActive(status => !status)} className={styles.arrow} style={{ transform: active ? "rotate(135deg)" : "rotate(315deg)" }} />
					</div>
				</div>
				<SameThemes pin={pin} />
			</div>
			<div className={styles.footer}>
				footer
			</div>
		</div>
	)
}

export default InfoZoomed