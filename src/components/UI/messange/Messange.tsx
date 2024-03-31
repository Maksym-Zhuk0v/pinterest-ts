import React, { useContext, useEffect, useState } from 'react';
import styles from './messange.module.scss'
import Close from '../close/Close';
import Edit from '../../UI/edit/Edit'
import { Context } from '../../../context';
import { IPin } from '../../../models';
import { Link, useNavigate } from 'react-router-dom';
import Option from '../option/Option';
import Loader from '../loader/Loader';

const Messange = () => {
	const context = useContext(Context)
	const data = context.pins
	const [active, setActive] = useState(false)
	const [optionisible, setOptionVisible] = useState<string[]>([])
	const [hovered, setHovered] = useState<string[]>([])
	const [finalArr, setFinalArr] = useState<IPin[][]>([])
	const navigate = useNavigate()

	useEffect(() => {
		if (!context.loading) {
			setFinalArr(Object.values(data.reduce((result: { [key: string]: IPin[] }, obj) => {
				const sort = obj.sort;
				(result[sort] = result[sort] || []).push(obj);
				return result;
			}, {})).filter(theme => theme.length >= 3))
		}
	}, [context.loading])

	return (
		<div>
			<Edit onClick={() => setActive(true)} type={"bell"} />
			{active && <div className={styles.main}>
				<p style={{
					textAlign: 'center',
					fontWeight: 600
				}}>{finalArr.length ? 'Обновления' : 'There is no themes'}</p>
				{
					finalArr.map(theme => {
						return (
							<Link
								style={{ backgroundColor: hovered.includes(theme[0].sort) ? "#e0e0e09b" : "" }}
								onClick={() => {
									setOptionVisible([])
									if (optionisible) setActive(false)
									setHovered([])
								}}
								to={`theme/${theme[0].sort}`}
								onMouseEnter={() => setHovered([theme[0].sort])} onMouseLeave={() => {
									setHovered([])
									setOptionVisible([])
								}}
								key={theme[0].sort}
								className={styles.theme}>
								<div style={{
									display: 'flex',
									justifyContent: 'space-between',
								}}>
									<p className={styles.font}>{theme[0].title.length > 70 ? theme[0].title.slice(0, 69) + '...' : theme[0].title}</p>
									<Edit onClick={e => {
										e.stopPropagation()
										e.preventDefault()
										setOptionVisible([theme[0].sort])
									}} type={'massEdit'} />
									<div onClick={e => {
										e.stopPropagation()
										e.preventDefault()
									}} style={{
										display: optionisible.includes(theme[0].sort) ? 'block' : 'none'
									}} className={styles.options} >
										<Option onClick={() => {
											setFinalArr(finalArr.filter(currTheme => currTheme[0].sort !== theme[0].sort))
										}} name='Удалить обновление' />
										<Option name='перейти' onClick={() => {
											navigate(`theme/${theme[0].sort}`)
											setActive(false)
											setOptionVisible([])
											setHovered([])
										}} />
									</div>
								</div>
								<div className={styles.images}>
									{
										theme.slice(0, 3).map(item => {
											return (
												<div key={item.id} className={styles.img} style={{ backgroundImage: `url(${item.image})` }} />
											)
										})
									}
								</div>
							</Link>
						)
					})
				}
			</div>}
			<Close active={active} setActive={setActive} />
		</div>
	);
};

export default Messange;