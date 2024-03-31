import React, { useContext, useEffect } from 'react';
import { Context } from '../../context';
import Content from '../../components/content/Content';
import Loader from '../../components/UI/loader/Loader';

const Home = () => {
	const context = useContext(Context)
	const data = context.pins
	const loading = context.loading
	if (loading) return <Loader />

	return (
		<Content data={data} />
	)
};

export default Home;