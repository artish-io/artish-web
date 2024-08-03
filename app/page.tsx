import React from 'react';
import Hero from './components/Home/Hero';
import GetStarted from './components/Home/GetStarted';
import Blog from './components/Home/Blog';

const page = () => {
	return (
		<>
			<Hero />
			<GetStarted />
			<Blog />
		</>
	);
};

export default page;
