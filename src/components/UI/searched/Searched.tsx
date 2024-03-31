import React, { Dispatch, SetStateAction } from 'react';
import styles from './searched.module.scss';

interface ISearched {
	searched: string[];
	setsearchParams: (params: { search: string }) => void;
	setActive: Dispatch<SetStateAction<boolean>>;
	setSearched: React.Dispatch<React.SetStateAction<string[]>>
}

const Searched = ({ searched, setsearchParams, setActive, setSearched }: ISearched) => {
	return (
		<div style={{
			display: 'flex', gap: 6, marginTop: 8
		}}>
			{
				searched.map(i => <div className={styles.btn} onClick={() => {
					setsearchParams({ search: i });
					setActive(false);
				}} key={i}>{i}<div onClick={(e) => {
					e.stopPropagation()
					setSearched(searched.filter(opt => opt !== i))
				}} className={styles.close} /></div>)
			}
		</div>
	);
}

export default Searched;