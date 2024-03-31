import React from 'react';
import styles from './miniInput.module.scss';

interface IMiniInputProps {
	onClick?: () => void;
	pH?: string;
	style?: React.CSSProperties;
	onFocus?: () => void;
	value: string;
	onChange?: (value: string) => void;
}

const MiniInput = React.forwardRef<HTMLInputElement, IMiniInputProps>(({
	onFocus,
	onClick,
	pH,
	value,
	onChange,
	style = {},
}, ref) => {
	return (
		<input
			value={value}
			onChange={(e) => onChange && onChange(e.target.value)}
			style={style}
			placeholder={pH}
			onClick={onClick}
			className={styles.myInput}
			ref={ref}
			onFocus={onFocus}
		/>
	);
});

export default MiniInput;
