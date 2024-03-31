import React, { useContext, useEffect } from 'react'
import { Context } from '../../context'
import IconInfo from '../UI/iconInfo/IconInfo'

const Created = () => {
	const context = useContext(Context)
	const created = context.created

	const createdPin = created.map(id => context.pins.find(i => i.id === id))

	return (
		<div style={{
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
			gap: 12
		}}>
			{
				createdPin.map((pin, id) => <IconInfo key={typeof pin !== 'string' ? pin?.id : context.created[id]} pin={pin || ''} />)
			}
		</div>
	)
}

export default Created