import Image from 'next/image';

import Avatar1 from '@/public/images/avatar-1.jpeg';
import Avatar2 from '@/public/images/avatar-2.jpeg';
import Avatar3 from '@/public/images/avatar-3.jpeg';

import AuthorImage from '@/public/images/gig-author.png';
import GigImage from '@/public/images/gig-image.png';

import Search from './components/Search';
import Rating from './components/Rating';

import { CiDollar } from 'react-icons/ci';
import { SiAdobephotoshop } from 'react-icons/si';
import { FaPlus } from 'react-icons/fa6';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { CiLocationOn } from 'react-icons/ci';

async function fetchAllGigs() {
	const res = await fetch('http://localhost:3000/api', { cache: 'no-store' });
	const data = await res.json();

	const gigs = data.data.flatMap((item: any) => {
		return item.gigs.map((gig: any) => ({
			...gig,
			authorInfo: {
				...item.author,
			},
		}));
	});

	return gigs;
}

const page = async ({ searchParams }: { searchParams: { search: string } }) => {
	const allGigs = await fetchAllGigs();
	console.log(allGigs);

	return (
		<section className="container bg-white py-14 lg:py-20">
			<Search />
			<div className="mt-10">
				<h3 className="text-2xl md:text-3xl font-semibold">
					&apos;{searchParams.search}&apos;
				</h3>
				<div className="flex items-center gap-3 mt-8">
					<p className="font-semibold">Popular Tags:</p>
					<div className="flex flex-wrap gap-2">
						<button className="border border-black text-[#454545] font-semibold rounded-full py-1 px-2 text-xs ">
							Programming (200)
						</button>
						<button className="border border-black text-[#454545] font-semibold rounded-full py-1 px-2 text-xs">
							JavaScript (490)
						</button>
						<button className="border border-black text-[#454545] font-semibold rounded-full py-1 px-2 text-xs">
							Python (150)
						</button>
						<button className="border border-black text-[#454545] font-semibold rounded-full py-1 px-2 text-xs">
							React (100)
						</button>
						<button className="border border-black text-[#454545] font-semibold rounded-full py-1 px-2 text-xs">
							Node.js (200)
						</button>
					</div>
				</div>
				<div className="bg-[#FCD5E3] rounded-xl flex justify-between items-center p-4 mt-5">
					<h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
						Create gig listing for this search
					</h2>
					<div className="flex justify-center items-center -space-x-4 mb-4">
						<Image
							src={Avatar3}
							alt="Person 1"
							className="w-8 h-8 lg:w-12 lg:h-12 rounded-full object-cover"
						/>
						<Image
							src={Avatar2}
							alt="Person 2"
							className="w-8 h-8 lg:w-12 lg:h-12 rounded-full  object-cover"
						/>
						<Image
							src={Avatar1}
							alt="Person 3"
							className="w-8 h-8 lg:w-12 lg:h-12 rounded-full object-cover"
						/>
					</div>
					<button className="bg-black text-white rounded-lg px-4 md:px-14 py-3">
						+ Post a Gig
					</button>
				</div>
			</div>
			<div className="flex mt-10 gap-5">
				<div className="basis-1/4 border border-black rounded-xl hidden md:block self-start">
					<h3 className="text-center py-2 px-6  font-semibold text-lg">
						Showing 1-9 of 75630 results
					</h3>
					<hr className="border-t border-black" />
					<div className="py-3 px-6 space-y-2">
						<p className="font-semibold">All</p>
						<p>Software Development</p>
						<ul className="px-5 space-y-2">
							<li>Programming </li>
							<li>JavaScript</li>
							<li>Python</li>
							<li>App Development</li>
							<li>Mobile Development</li>
						</ul>
					</div>
					<hr className="border-t border-black" />
					<div className="py-3 px-6">
						<p className="font-semibold">Sort by</p>
						<select className="my-4 py-3 px-2 rounded-xl border border-black w-full">
							<option>Custom</option>
							<option>Relevance</option>
							<option>Price</option>
							<option>Rating</option>
						</select>
					</div>
					<hr className="border-t border-black" />
					<div className="py-3 px-6">
						<p className="font-semibold">Minimum Rate</p>
						<input
							type="text"
							className="my-4 py-3 px-2 rounded-xl border border-black w-full"
						/>
						<p className="font-semibold">Minimum Rate</p>
						<input
							type="text"
							className="my-4 py-3 px-2 rounded-xl border border-black w-full"
						/>
					</div>
					<hr className="border-t border-black" />
					<div className="py-3 px-6">
						<p className="font-semibold">Rating</p>
						<div className="my-3 space-y-1">
							<div className="flex items-center justify-between ">
								<div className="flex gap-2 items-center">
									<Rating rating={4} />
									<p>and above</p>
								</div>
								<input type="checkbox" className="ml-auto w-4 h-4" />
							</div>
							<div className="flex items-center justify-between ">
								<div className="flex gap-2 items-center">
									<Rating rating={3} />
									<p>and above</p>
								</div>
								<input type="checkbox" className="ml-auto w-4 h-4" />
							</div>
							<div className="flex items-center justify-between ">
								<div className="flex gap-2 items-center">
									<Rating rating={2} />
									<p>and above</p>
								</div>
								<input type="checkbox" className="ml-auto w-4 h-4" />
							</div>
							<div className="flex items-center justify-between ">
								<div className="flex gap-2 items-center">
									<Rating rating={2} />
									<p>and above</p>
								</div>
								<input type="checkbox" className="ml-auto w-4 h-4" />
							</div>
						</div>
					</div>
					<hr className="border-t border-black" />
					<div className="py-3 px-6">
						<p className="font-semibold">Popular Tags</p>
						<div className="my-3 space-y-1">
							<div className="flex items-center justify-between">
								<p>All Tags</p>
								<input type="checkbox" className="ml-auto w-4 h-4" />
							</div>
							<div className="flex items-center justify-between">
								<p>All Tags</p>
								<input type="checkbox" className="ml-auto w-4 h-4" />
							</div>
							<div className="flex items-center justify-between">
								<p>All Tags</p>
								<input type="checkbox" className="ml-auto w-4 h-4" />
							</div>
						</div>
					</div>
				</div>
				<div className="basis-full lg:basis-3/4">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
						{allGigs.map((gig: any, index: any) => (
							<div className="border border-black rounded-xl" key={index}>
								<div className="px-4 pt-3">
									<div className="flex items-center gap-2">
										<Image
											src={AuthorImage}
											alt="Author Image"
											className="h-20 w-20 object-cover rounded-full border-8 border-[#FCD5E3]"
										/>
										<div className="">
											<h3 className="text-lg">{gig.authorInfo.name}</h3>
											<Rating rating={4} />
											<div className="flex items-center text-xs flex-wrap gap-1 mt-2">
												<p className="bg-[#E0E0E0] p-1 rounded">
													{gig.category}
												</p>
											</div>
										</div>
									</div>
									<div className="flex flex-wrap items-center gap-2 pt-3">
										<button className="border border-black text-black font-normal rounded-full py-1 px-2 text-xs flex items-center gap-1">
											<CiDollar className="text-lg" />
											<p>50 - 70/hr</p>
										</button>
										<button className="border border-black text-black font-normal rounded-full py-1 px-2 text-xs flex items-center gap-1">
											<SiAdobephotoshop className="text-lg" />
											<p>Photoshop</p>
										</button>
										<button className="border border-black text-black font-normal rounded-full py-1 px-2 text-xs flex items-center gap-1">
											<CiDollar className="text-lg" />
											<p>50 - 70/hr</p>
										</button>
										<button className="border border-black text-black font-normal rounded-full py-1 px-2 text-xs flex items-center gap-1">
											<SiAdobephotoshop className="text-lg" />
											<p>Photoshop</p>
										</button>
									</div>
								</div>
								<Image
									src={GigImage}
									alt="Gig Image"
									className="w-full h-40 object-cover mt-3"
								/>
								<div className="flex items-center justify-between px-5 py-3">
									<FaPlus />
									<button className="flex items-center gap-3 bg-[#18020C] text-white py-3 px-7 rounded-lg">
										<HiOutlineChatBubbleLeftRight />
										<p>Contact</p>
									</button>
									<div className="flex items-center">
										<CiLocationOn />
										<p className="text-xs">HK</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default page;
