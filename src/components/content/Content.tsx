import React, { useEffect, useMemo, useState } from 'react'
import { IPin } from '../../models';
import Card from '../UI/card/Card';
import { useSearchParams } from 'react-router-dom';

interface IContent {
	data: IPin[];
}

const Content = ({ data }: IContent) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [count, setCount] = useState(Math.floor((windowWidth - 32) / 248))
	const [searchParams, setSearchParams] = useSearchParams()
	const search = searchParams.get('search') || '';

	useEffect(() => {
		setWindowWidth(window.innerWidth);
		window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
		return () => {
			window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
		};
	}, []);

	const recount = useMemo(() => setCount(Math.floor((windowWidth - 32) / 248) <= 2 ? 2 : Math.floor((windowWidth - 32) / 248)), [windowWidth])

	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			gap: 12,
		}}>
			{
				Array.from({ length: count }, (_, index) => index + 1).map(div => {
					return (
						<div key={div}>
							{
								Array.from({ length: Math.floor(data.length / count) }, (_, i) => i + 1).map(i => (
									<div style={{ marginTop: 8 }} key={i} >
										<Card item={[...data.filter(pin => pin.name.toLowerCase().includes(search.toLowerCase())), ...data.filter(pin => !pin.name.toLowerCase().includes(search.toLowerCase()))][(i - 1) * count + div - 1]} />
									</div>
								))
							}
						</div>
					)
				})
			}
		</div>
	)
}

export default Content