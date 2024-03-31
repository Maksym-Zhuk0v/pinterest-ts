import React from 'react'
import { useNavigate } from 'react-router-dom'


const NotFoundPage = () => {
	const navigate = useNavigate()
	return (
		<div style={{
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-between',
			height: 'calc(100vh - 80px)',
			textAlign: 'center'
		}}>
			<h1 style={{
				fontSize: '30px',
				marginBottom: '10px'
			}}>Page Not Found</h1>
			<p style={{
				fontSize: '22px',
				fontWeight: '800'
			}} onClick={() => navigate(-1)}>click here to go to the last page</p>
			<p style={{
				fontSize: '15px',
				color: '#777'
			}}>Sorry, the page you are looking for does not exist.</p>
		</div>
	)
}

export default NotFoundPage