import React, { useContext } from 'react'
import { Context } from '../../context';
import IconInfo from '../UI/iconInfo/IconInfo';

const Saved = () => {
	const context = useContext(Context)
	const saved = context.saved

	const savedPins = saved.map(id => context.pins.find(i => i.id === id))

	if (!saved.length) return <p style={{ textAlign: 'center', fontWeight: 600 }}>there is no saved pins</p>

	return (
		<div style={{
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
			gap: 12
		}}>
			{
				savedPins.map((pin, id) => <IconInfo key={typeof pin !== 'string' ? pin?.id : context.created[id]} pin={pin || ''} />)
			}
		</div>
	)
}

export default Saved