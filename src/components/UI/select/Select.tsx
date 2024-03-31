import React, { ReactNode, useState } from 'react';
import styles from './select.module.scss'
import Close from '../close/Close';
import Option from '../option/Option';

type Option = {
	name: string;
	to?: string;
}

interface ISelect {
	options?: Option[];
	children?: ReactNode;
	style?: object
	arrow?: Boolean
}

const Select = ({ options, style, arrow, children }: ISelect) => {

	const [active, setActive] = useState(false)

	return (
		<div style={style}>
			<button onClick={() => setActive(open => !open)} style={{
				padding: typeof (children) === 'string' ? '16' : 0
			}} className={styles.default}>{children}<div style={{
				transform: active ? "rotate(-45deg)" : "rotate(135deg)",
				display: arrow ? 'inline-block' : 'none',
			}} className={styles.arrow} /></button>
			{active &&
				<div style={{
					position: options ? options[0].to ? 'fixed' : 'absolute' : 'fixed',
					right: options ? options[0].to ? '' : '16px' : '',
				}} onClick={e => e.stopPropagation()} className={styles.options}>
					{
						options?.map(opt => <Option key={opt.name} onClick={() => setActive(false)} value={opt.to} name={opt.name} />)
					}
				</div>}
			<Close active={active} setActive={setActive} />
		</div >
	);
}

export default Select;