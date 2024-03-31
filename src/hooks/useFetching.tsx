import { useEffect, useState } from 'react'
import { IPin } from '../models'

export function useFetching() {
	const [pins, setPins] = useState<IPin[]>([])
	const [loading, setLoading] = useState(true)

	async function fetchPins() {
		await fetch("https://64e53eb3c5556380291439b0.mockapi.io/item")
			.then(res => res.json())
			.then(res => setPins(res))
		setLoading(false)
	}

	useEffect(() => {
		fetchPins()
	}, [])

	return { pins, loading, setPins }
}