import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './headerInput.module.scss'
import Close from '../close/Close'
import Searched from '../searched/Searched'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import InputIcon from '../InputIcon/InputIcon'
import { Context } from '../../../context'
import { HeadetContext } from '../../header/Header'

const HeaderInput = () => {
	const context = useContext(Context)
	const headerContext = useContext(HeadetContext)
	const pins = context.pins
	const inputRef = useRef<HTMLInputElement>(null)
	const [active, setActive] = useState(false)
	const [query, setQuery] = useState('')
	const [searched, setSearched] = useState([
		'nike',
	])
	const [searchParams, setSearchParams] = useSearchParams()
	const navigate = useNavigate()
	const isSearched = searchParams.has('search')
	const location = useLocation()

	useEffect(() => {
		if (isSearched) navigate(`/${location.search}`)
	}, [isSearched])

	useEffect(() => {
		if (inputRef.current && active) {
			inputRef.current.focus();
		}
		headerContext.setActive(active)
	}, [active])

	useEffect(() => {
		if (searched.length >= 5) setSearched(searched.slice(0, 4))
	}, [searched])

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const form = e.target
		if (form.search.value) {
			setSearched([query, ...searched.filter(s => s.toLocaleLowerCase().trim() !== query.toLocaleLowerCase().trim())])
			setQuery('')
			setActive(false)

			setSearchParams({ search: query })

			if (inputRef.current) {
				inputRef.current.blur();
			}
		}
	}

	return (
		<div style={{
			flexGrow: 1,
		}} >
			<form style={{
				display: 'flex',
				alignItems: 'center'
			}} autoComplete='off' onSubmit={handleSubmit}>
				{!active && <div onClick={() => setActive(true)} className={styles.search} />}
				<input style={{
					padding: active ? "0 16px" : '0 16px 0 40px'
				}} ref={inputRef} type='search' name='search' value={query} onChange={e => setQuery(e.target.value)} placeholder='Поиск' className={[styles.input, active ? styles.active : ''].join(' ')} onFocus={() => setActive(true)} />
				{query && <div onClick={() => {
					if (inputRef.current) inputRef.current.focus();
					setQuery('')
				}} className={styles.clear} />}
			</form>
			{active && <div className={styles.modal}>
				<div className={styles.content} >
					{!!searched.length && <p className={styles.title}>Недавние поисковые запросы</p>}
					<Searched setSearched={setSearched} setsearchParams={setSearchParams} setActive={setActive} searched={searched} />
					<p style={{ marginTop: !!searched.length ? 8 : 0 }} className={styles.title}>Популярно в Pinterest</p>
					<InputIcon setActive={setActive} icons={pins} />
					{!!searched.length && <p style={{ marginTop: 8 }} className={styles.title}>Идеи для вас</p>}
					{!!searched.length && <InputIcon setActive={setActive} icons={pins.filter(e => searched[0] ? e.name.toLocaleLowerCase().includes(searched[0].toLocaleLowerCase()) : pins)} />}
				</div>
				<div className={styles.shadow} />
				<Close active={active} setActive={setActive} />
			</div>}
		</div >
	)
}

export default HeaderInput
