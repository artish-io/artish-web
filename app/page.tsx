import React from 'react';
import Hero from './components/Home/Hero';
import GetStarted from './components/Home/GetStarted';
import Blog from './components/Home/Blog';
import TrustedBy from './components/Home/TrustedBy';

const page = () => {
	return (
		<>
			<Hero />
			<GetStarted />
			<Blog />
			<TrustedBy />
		</>
	);
};

export default page;
