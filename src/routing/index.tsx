import React from 'react'
import ZoomedCard from '../pages/zoomedPin/zoomedPin'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import NotFoundPage from '../pages/notFound/NotFoundPage'
import Theme from '../pages/theme/Theme'
import Header from '../components/header/Header'
import InfoPage from '../pages/infoPage/InfoPage'
import SettingsPage from '../pages/settings/SettingsPage'
import SettingsProfile from '../components/settingsProfile/SettingsProfile'
import CreatePin from '../pages/createPin/CreatePin'
import CreatePinIdea from '../pages/createPinIdea/CreatePinIdea'
import Saved from '../components/saved/Saved'
import Created from '../components/created/Created'

const Routing = () => {
	return (
		<>
			<Header />
			<div style={{ marginTop: 80 }}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='info' element={<InfoPage />} >
						<Route path='' element={<Navigate to={'saved'} replace />} />
						<Route path='saved' element={<Saved />} />
						<Route path='created' element={<Created />} />
					</Route>
					<Route path='create-pin' element={<CreatePin />} />
					<Route path='create-pin-idea' element={<CreatePinIdea />} />
					<Route path='settings' element={<SettingsPage />} >
						<Route path='' element={<Navigate to={'profile'} replace />} />
						<Route path='profile' element={<SettingsProfile />} />
						<Route path='account-settings' element={<p>Настроить аккаунт</p>} />
						<Route path='profile-visibility' element={<p>Видимость аккаунта</p>} />
						<Route path='edit' element={<p>редактировать</p>} />
						<Route path='claim' element={<p>Claim</p>} />
						<Route path='permissions' element={<p>Позволение</p>} />
						<Route path='notifications' element={<p>Извещение</p>} />
						<Route path='privacy' element={<p>политика</p>} />
						<Route path='security' element={<p>Безопасность</p>} />
						<Route path='branded-content' element={<p>branded content</p>} />
					</Route>
					<Route path='pin/:id' element={<ZoomedCard />} />
					<Route path='theme/:theme' element={<Theme />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes >
			</div>
		</>
	)
}

export default Routing