import React from 'react';
import styles from './edit.module.scss'

interface IEdit {
	type: String
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
	style?: object
	burger?: boolean
}

const Edit = ({ burger, type, ...props }: IEdit) => {

	const rootMassenge = [styles.btn]

	switch (type) {
		case "mainBox":
			rootMassenge.push(styles.mainBox)
			break;
		case "post":
			rootMassenge.push(styles.post)
			break;
		case "comm":
			rootMassenge.push(styles.comm)
			break;
		case "mass":
			rootMassenge.push(styles.mass)
			break;
		case "bell":
			rootMassenge.push(styles.bell)
			break;
		case "massEdit":
			rootMassenge.push(styles.massEdit)
			break;
		case "burger":
			rootMassenge.push(styles.burger)
			break;
		default:
			rootMassenge.push(styles.mainBox)
			break;
	}

	return (
		<div  {...props} className={rootMassenge.join(' ')} >
			<div className={[styles.point, burger ? styles.open : ''].join(' ')} />
			<div className={[styles.point, burger ? styles.open : ''].join(' ')} />
			<div className={[styles.point, burger ? styles.open : ''].join(' ')} />
		</div>
	);
};

export default Edit;