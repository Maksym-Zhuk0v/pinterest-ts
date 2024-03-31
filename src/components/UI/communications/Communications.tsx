import React, { useEffect, useRef, useState } from 'react';
import styles from './communication.module.scss'
import Edit from '../edit/Edit';
import Close from '../close/Close';
import MiniInput from '../miniInput/MiniInput';
import Select from '../select/Select';
import writeMass from '../../../icons/mass-whrite.png';
import addFriend from '../../../icons/add-friend.png'
import fix from '../../../icons/fix.png'
import redShare from '../../../icons/red-share.png';
import heart from '../../../icons/heart.png'

const Communication = () => {
	const [active, setActive] = useState(false)
	const [close, setClose] = useState(false)
	const inputRef = useRef<HTMLInputElement>(null)
	const [title, setTitle] = useState('')
	const [recipient, setRecipient] = useState('')

	useEffect(() => {
		if (active) setClose(false)
	}, [active])

	return (
		<div >
			<Edit onClick={() => setActive(true)} type={'mass'} />
			{
				active && <div onClick={(e) => e.stopPropagation()} className={styles.main}>
					<div style={{
						display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between'
					}}>
						<div>
							{close ? <p style={{ fontWeight: 700, fontSize: 22 }}>Новое сообщение</p> : <p style={{ fontWeight: 700, textAlign: 'center' }}>Входящие</p>}
							{close ? <div onClick={() => setClose(false)} className={styles.cancel}>Отмена</div> : <Select options={[{ name: 'Отметить все как прочитанное' }]} style={{ position: 'absolute', right: '16px', top: '16px' }} >
								<Edit type={'comm'} />
							</Select>}
							<MiniInput value={recipient} onChange={setRecipient} style={{ marginTop: 42 }} onFocus={() => setClose(true)} ref={inputRef} pH='Поиск по имени или эл. адресу' />
							{!close && <div className={styles.btns}>
								<div onClick={() => {
									if (inputRef.current) inputRef.current.focus()
								}} className={styles.btn}>
									<div style={{
										backgroundImage: `url(${writeMass})`,
										width: 45,
										height: 45
									}} className={styles.img} />
									<div>
										<p style={{
											fontWeight: 600
										}}>Новое сообщение</p>
									</div>
								</div>
								<div className={styles.btn}>
									<div style={{
										width: 45, height: 45, backgroundColor: '#e1e1e1', borderRadius: '50%',
									}} >
										<div className={styles.img} style={{
											backgroundImage: `url(${addFriend})`,
											backgroundSize: 18
										}} />
									</div>
									<div >
										<p style={{
											fontWeight: 600
										}}>Пригласите друзей</p>
										<p style={{
											fontWeight: 400, fontSize: 15, color: 'gray'
										}}>Подключитесь, чтобы начать чат</p>
									</div>
								</div>
							</div>}
						</div>
						<div>
							{close && <div style={{
								display: 'flex', gap: 5, alignItems: 'center'
							}}>
								<div style={{
									width: 40,
									height: 40
								}}>
									<div style={{
										backgroundImage: `url(${fix})`, backgroundSize: '80%', cursor: 'pointer'
									}} className={styles.img} />
								</div>
								<MiniInput onChange={setTitle} value={title} pH='Введите сообщение' />
								<div style={{
									width: 40,
									height: 40
								}}>
									<div onClick={() => {
										if (title && recipient) {
											console.log({ title, recipient })
											setTitle('')
											setRecipient('')
										}
									}} style={{
										backgroundImage: `url(${title && recipient ? redShare : heart})`, backgroundSize: '80%', cursor: 'pointer'
									}} className={styles.img} />
								</div>
							</div>}
						</div>
					</div>
				</div>
			}
			<Close active={active} setActive={setActive} />
		</div >
	);
};

export default Communication;