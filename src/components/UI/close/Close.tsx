import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import styles from './close.module.scss'

interface IClose {
	active: boolean;
	children?: ReactNode;
	setActive: Dispatch<SetStateAction<boolean>>;
}

const Close = ({ active, setActive, children, }: IClose) => {

	const rootClose = [styles.close]

	if (active) {
		rootClose.push(styles.active)
		document.body.classList.add('body-fixed');
	}

	const closeModal = () => {
		setActive(open => !open)
		document.body.classList.remove('body-fixed');
	}

	return (
		<div onClick={closeModal} className={rootClose.join(' ')}>{children}</div>
	);
};

export default Close;