import React, { useContext, useEffect, useState } from 'react';
import styles from './card.module.scss';
import Button from '../button/Button';
import Edit from '../edit/Edit';
import { Link, useNavigate } from 'react-router-dom';
import { IPin } from '../../../models';
import { Context } from '../../../context';
import Option from '../option/Option';

interface ICard {
	item: IPin
}

const Card = ({ item }: ICard) => {
	const [hovered, setHovered] = useState(false)
	const [selected, setSelected] = useState(false)
	const [isVisible, setIsVisible] = useState(false);
	const context = useContext(Context)
	const navigate = useNavigate()

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;
		if (isVisible) {
			timeoutId = setTimeout(() => {
				setIsVisible(false);
			}, 2000);
		}
		return () => {
			clearTimeout(timeoutId);
		};
	}, [isVisible]);

	const checkLength = (str: string) => str.length > 25 ? str.slice(0, 25) + '...' : str

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	return (
		<>
			<Link
				onClick={scrollToTop}
				to={`/pin/${item.id}`}
				onMouseEnter={() => setHovered(true)} onMouseLeave={() => {
					setHovered(false)
					setSelected(false)
				}}
				className={styles.main} key={item.id}>
				<div style={{ position: 'relative' }}>
					<img className={styles.image} src={item.image} />
					<div style={{ display: hovered ? 'flex' : 'none', flexDirection: 'column', padding: 12, justifyContent: 'space-between' }} className={styles.shadow} >
						<div>
							<Button onClick={(e) => {
								e.stopPropagation()
								e.preventDefault()
								context.setSaved([...context.saved, item.id])
							}} type={context.saved.includes(item.id) ? 'disabled' : 'red'}>{context.saved.includes(item.id) ? 'Сохранено' : 'Сохранить'}</Button>
						</div>
						<div style={{ display: 'flex', gap: 12 }}>
							<Edit onClick={(e) => {
								e.stopPropagation()
								e.preventDefault()
								setSelected(true)
							}} type={''} />
							<Edit onClick={(e) => {
								e.stopPropagation()
								e.preventDefault()
								navigator.clipboard.writeText(`localhost:3000/pin/${item.id}`)
								setIsVisible(true)
							}} type={'post'} />
							<div onClick={e => {
								e.stopPropagation()
								e.preventDefault()
							}} style={{ display: selected ? 'flex' : 'none', padding: 4, position: 'absolute', bottom: 12, flexDirection: 'column', gap: 2, backgroundColor: 'white', borderRadius: 12 }}>
								<Option name='перейти' onClick={() => {
									navigate(`/pin/${item.id}`)
									scrollToTop()
								}} />
								<Option name='сохранить' onClick={() => {
									if (!context.saved.includes(item.id)) {
										context.setSaved([...context.saved, item.id])
										setSelected(false)
									}
								}} />
							</div>
						</div>
					</div>
				</div>
				<div style={{ marginLeft: "11px" }}><p style={{ fontSize: "14px", fontWeight: "600" }}>{checkLength(item.name)}</p></div>
			</Link >
			<div className={styles.copied} style={{
				display: isVisible ? 'flex' : 'none',
			}}>Url Copied</div>
		</>
	);
};

export default Card;