'use client';

import { useState } from 'react';

const categories = [
	'All',
	'Software Engineering',
	'AI/ML',
	'Software Engineering',
	'Data science',
	'Software Engineering',
	'Software Engineering',
	'Software Engineering',
	'Software',
];

const Search = () => {
	const [search, setSearch] = useState('');

	return (
		<div className="border border-black rounded-xl p-4 lg:p-10">
			<div className="flex gap-3 lg:gap-10">
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search services"
					className="w-full border border-black rounded-xl p-3 text-[#454545] active:outline-none focus:outline-none"
				/>
				<button className="bg-black text-white rounded-lg px-4 md:px-14 py-3">
					Search
				</button>
			</div>
			<div className="flex flex-wrap gap-2 mt-4">
				{categories.map((category, index) => (
					<button
						key={index}
						onClick={() => setSearch(category)}
						className="border border-black text-[#454545] font-semibold rounded-full py-1 px-2 text-xs hover:border-[#b5b5b5] transition-all duration-300"
					>
						{category}
					</button>
				))}
			</div>
		</div>
	);
};

export default Search;
