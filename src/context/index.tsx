import React, { Dispatch, SetStateAction, createContext, useState } from 'react'
import { useFetching } from '../hooks/useFetching'
import { IPin } from '../models'

type profile = {
	firstName: string,
	lastName: string,
	nickname: string,
	email: string
}

interface IContext {
	pins: IPin[]
	loading: boolean,
	profile: profile,
	setProfile: Dispatch<SetStateAction<{ firstName: string; lastName: string; nickname: string; email: string; }>>,
	saved: string[],
	setSaved: Dispatch<SetStateAction<string[]>>
	created: string[],
	setCreated: Dispatch<SetStateAction<string[]>>
	setPins: Dispatch<SetStateAction<IPin[]>>,
	themes: string[],
	setThemes: Dispatch<SetStateAction<string[]>>
}

export const Context = createContext<IContext>({
	pins: [],
	loading: true,
	profile: {
		firstName: '',
		lastName: '',
		nickname: '',
		email: ''
	},
	setProfile: () => { },
	saved: [],
	setSaved: () => [],
	setPins: () => [],
	themes: [''],
	setThemes: () => [],
	created: [],
	setCreated: () => []
})

export const MainContext = ({ children }: { children: React.ReactNode }) => {
	const { pins, loading, setPins } = useFetching()
	const [saved, setSaved] = useState<string[]>(['s74nfb38'])
	const [created, setCreated] = useState<string[]>(['ns83js9w'])
	const [themes, setThemes] = useState<string[]>(['Nike', 'NB', 'Adidas', 'Vans', 'other', 'Puma', 'Reebok', 'Under Armour'])
	const [profile, setProfile] = useState({
		firstName: 'Vasya',
		lastName: 'lastName',
		nickname: 'Vasiliiiiiiiii',
		email: 'cifbpn2@gmail.com'
	})

	return (
		<Context.Provider value={{ pins, loading, profile, setProfile, saved, setSaved, setPins, themes, setThemes, created, setCreated }}>
			{children}
		</Context.Provider>
	)
}