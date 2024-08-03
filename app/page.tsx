import React from 'react';
import Hero from './components/Home/Hero';
import GetStarted from './components/Home/GetStarted';
import Blog from './components/Home/Blog';
import TrustedBy from './components/Home/TrustedBy';
import Faqs from './components/Home/Faqs';

const page = () => {
	return (
		<>
			<Hero />
			<GetStarted />
			<Blog />
			<TrustedBy />
			<Faqs />
		</>
	);
};

export default page;
