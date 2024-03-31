import React, { useContext, useState, useEffect } from 'react';
import styles from './createPin.module.scss';
import { IPin } from '../../models';
import { Context } from '../../context';
import Button from '../../components/UI/button/Button';
import { useLocation, useNavigate } from 'react-router-dom';

const CreatePin = () => {
	const [pinForm, setPinForm] = useState<IPin>({ name: '', title: '', sort: '', id: '', image: '', type: 'pin' });
	const context = useContext(Context);
	const [isUrl, setIsUrl] = useState(true);
	const [searchTheme, setSearchTheme] = useState('')
	const data = context.pins;
	const setPins = context.setPins;
	const profile = context.profile;
	const themes = context.themes;
	const navigate = useNavigate()
	const location = useLocation()

	const checkImageURL = (url: string) => {
		const img = new Image();
		img.onload = () => {
			setIsUrl(true);
		};
		img.onerror = () => {
			setIsUrl(false);
		};
		img.src = url;
	};

	useEffect(() => {
		setPinForm({ ...JSON.parse(localStorage.getItem('pin') || JSON.stringify(pinForm)), sort: location?.state?.newIdea, id: profile.nickname + Date.now() })
		checkImageURL(pinForm.image)
	}, [])

	return (
		<div>
			<div className={styles.header}>
				<div>Создание пина</div>
				<div style={{ display: 'flex', gap: 8 }}>
					<Button type={'red'} onClick={() => {
						localStorage.setItem('pin', JSON.stringify(pinForm))
					}}>Сохранить</Button>
					<Button type={isUrl && pinForm.name.trim().length && pinForm.title.trim().length && pinForm.sort ? 'red' : 'disabled'} onClick={() => {
						setPins([...data, pinForm]);
						context.setCreated([...context.created, pinForm.id])
						setPinForm({ name: '', title: '', sort: '', id: '', image: '', type: 'pin' });
						localStorage.clear()
					}}>Создать</Button>
				</div>
			</div>
			<div className={styles.card}>
				<div>
					<div style={{
						backgroundImage: `url(${pinForm.image})`
					}} className={styles.img} />
					<input value={pinForm.image} onChange={(e) => {
						setPinForm({ ...pinForm, image: e.target.value.trim() });
						checkImageURL(e.target.value.trim());
					}} placeholder='Введите URL картинки' className={styles.addUrlInput} />
				</div>
				<div style={{ width: '100%' }}>
					<div className={styles.inputDiv} >
						<p className={styles.title}>Имя</p>
						<input value={pinForm.name} onChange={(e) => setPinForm({ ...pinForm, name: e.target.value })} placeholder='Введите имя' className={styles.input} />
					</div>
					<div className={styles.inputDiv} >
						<p className={styles.title}>Описание</p>
						<input value={pinForm.title} onChange={(e) => setPinForm({ ...pinForm, title: e.target.value })} placeholder='Введите описание' className={styles.input} />
					</div>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
						<div style={{ width: '60%' }} >
							<div className={styles.inputDiv} >
								<p className={styles.title}>найдите тему</p>
								<input value={searchTheme} onChange={(e) => setSearchTheme(e.target.value.trim())} placeholder='найти тему' className={styles.input} />
							</div>
							<select required className={styles.select} value={pinForm.sort} onChange={(e) => setPinForm({ ...pinForm, sort: e.target.value })}>
								{themes.filter(theme => theme.toLocaleLowerCase().includes(searchTheme.toLocaleLowerCase())).map(i => <option key={i}>{i}</option>)}
							</select>
						</div>
						<div style={{ width: '40%' }}>
							<button onClick={() => {
								localStorage.setItem('pin', JSON.stringify(pinForm))
								navigate('/create-pin-idea', {
									state: { cameFrom: location.pathname }
								})
							}} className={styles.createIdea}>
								Создать идею
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreatePin;
