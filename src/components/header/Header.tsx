import React, { Dispatch, SetStateAction, createContext, useState } from 'react'
import styles from './header.module.scss'
import { Link, useMatch } from 'react-router-dom';
import Select from '../UI/select/Select';
import Button from '../UI/button/Button';
import HeaderInput from '../UI/headerInput/HeaderInput'
import Communication from '../UI/communications/Communications';
import Messange from '../UI/messange/Messange';
import Profile from '../UI/profile/Profile';
import Info from '../UI/info/Info';
import Edit from '../UI/edit/Edit';

interface IHeadetContent {
	active: Boolean,
	setActive: Dispatch<SetStateAction<boolean>>
}

export const HeadetContext = createContext<IHeadetContent>({
	active: false,
	setActive: () => { }
})

const Header = () => {
	const match = useMatch('/');
	const [active, setActive] = useState(false)
	const [burger, setBurger] = useState(false)

	return (
		<HeadetContext.Provider value={{
			active: active, setActive: setActive
		}}>
			<div className={styles.fullScreen}>
				<div className={styles.options}>
					<Link to={'/'} className={styles.home} />
					<Link to={'/'}>
						<Button type={match === null ? '' : 'black'} >Главная</Button>
					</Link>
					<Select arrow={true} options={[
						{ name: 'создать пин', to: 'create-pin' },
						{ name: 'создать пин-идею', to: 'create-pin-idea' },
					]}>
						Создать
					</Select>
					<HeaderInput />
					<Messange />
					<Communication />
					<Profile />
					<Info />
				</div>
			</div>
			<div className={styles.lowScren}>
				<div className={styles.options}>
					{
						burger ?
							<>
								<Link to={'/'} className={styles.home} />
								<Link to={'/'}>
									<Button type={match === null ? '' : 'black'} >Главная</Button>
								</Link>
								<Select arrow={true} options={[
									{ name: 'создать пин', to: 'create-pin' },
									{ name: 'создать пин-идею', to: 'create-pin-idea' },
								]}>
									Создать
								</Select>
								<Messange />
								<Communication />
								<div>
									<Profile />
								</div>
								<Info />
							</> :
							<HeaderInput />
					}
					<div>
						<Edit onClick={() => setBurger(state => !state)} burger={burger} type={'burger'} />
					</div>
				</div>
			</div>
		</HeadetContext.Provider>
	)
}

export default Header;