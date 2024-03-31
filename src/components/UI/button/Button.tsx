import React from 'react';
import styles from './button.module.scss';

interface EventButtonProps {
	children: React.ReactNode;
	type?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	style?: React.CSSProperties;
}

const EventButton: React.FC<EventButtonProps> = ({ children, type, onClick, ...props }) => {
	const rootButton = [styles.button];

	switch (type) {
		case 'red':
			rootButton.push(styles.red);
			break;
		case 'black':
			rootButton.push(styles.black);
			break;
		case 'disabled':
			rootButton.push(styles.disabled);
			break;
		default:
			rootButton.push(styles.inherit);
			break;
	}

	return (
		<button {...props} disabled={type === 'disabled'} className={rootButton.join(' ')} onClick={onClick}>
			{children}
		</button>
	);
};

export default EventButton;
