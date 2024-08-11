'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

import spageHeroImg from '@/public/images/spage-man.jpeg';

const suggestedServices = [
	{
		title: 'Web Development',
	},
	{
		title: 'Graphic Design',
	},
	{
		title: 'Digital Marketing',
	},
	{
		title: 'Content Writing',
	},
	{
		title: 'Video Editing',
	},
];

const Hero = () => {
	const [search, setSearch] = useState('');

	return (
		<section className="bg-black h-[800px] relative">
			<div className="flex gap-10 h-full justify-between ">
				<div className="max-w-screen-xl mx-auto text-white basis-full md:basis-7/12 pl-8 md:pl-20 pt-28 ">
					<h1 className="text-6xl lg:text-8xl font-semibold leading-tight">
						Optimise <br />
						your workflow
					</h1>
					<p className="mt-10 w-full lg:w-3/4 text-lg">
						We connect businesses, SMEs and corporates to the most talented
						digital freelancers in the creator economy
					</p>
				</div>
				<div className="hidden md:block basis-5/12">
					<Image
						src={spageHeroImg}
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
			<div className="absolute bottom-[100px] md:bottom-[80px] lg:bottom-[130px] w-full px-8">
				<div className="container rounded-lg bg-white px-12 pt-8 py-6">
					<div className="flex justify-between gap-4 md:gap-20 items-start">
						<div className="flex-1">
							<input
								type="text"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								placeholder="What  freelancing service do you require?"
								className="w-full border-2 border-[#E9E9E9] rounded-lg p-3 text-[#454545] active:outline-none focus:outline-none"
							/>
							<div className="mt-4 flex justify-center">
								<div className="flex flex-wrap gap-2 md:gap-4 items-center">
									<p className="text-base font-semibold">Suggested:</p>
									<div className="flex flex-wrap gap-2 md:gap-5">
										{suggestedServices.map(({ title, index }: any) => (
											<button
												key={index}
												onClick={() => setSearch(title)}
												className="border-2 border-[#F5F5F5] text-black rounded-full p-2 text-xs hover:border-[#b5b5b5] transition-all duration-300"
											>
												{title}
											</button>
										))}
									</div>
								</div>
							</div>
						</div>
						<Link
							href={`/search?search=${search}`}
							className="bg-black text-white rounded-lg px-4 md:px-14 py-3"
						>
							Search
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
