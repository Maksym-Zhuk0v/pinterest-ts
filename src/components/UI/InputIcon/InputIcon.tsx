import React, { Dispatch, SetStateAction } from 'react'
import styles from './inputIcon.module.scss'
import { IPin } from '../../../models';
import { Link } from 'react-router-dom';

interface IInputIcons {
	setActive: Dispatch<SetStateAction<boolean>>;
	icons: IPin[],
}

const InputIcon = ({ icons, setActive }: IInputIcons) => {
	return (
		<div className={styles.icons}>
			{
				icons.slice(0, 6).map(icon => {
					return (
						<Link onClick={() => setActive(false)} to={`/pin/${icon.id}`} key={icon.id} className={styles.main}>
							<div className={styles.image}
								style={{
									backgroundImage: `url(${icon.image})`
								}} />
							<div className={styles.title}>
								{icon.name}
							</div>
						</Link>
					)
				})
			}
		</div>
	)
}

export default InputIcon