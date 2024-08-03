import Link from 'next/link';
import Image from 'next/image';

import { FaArrowRight } from 'react-icons/fa6';

import Avatar1 from '@/public/images/avatar-1.jpeg';
import Avatar2 from '@/public/images/avatar-2.jpeg';
import Avatar3 from '@/public/images/avatar-3.jpeg';

import SetUpImg from '@/public/images/set-up-acct.png';
import MatchClient from '@/public/images/match-client.png';

const GetStarted = () => {
	return (
		<div className="bg-white container">
			<section className="my-28 text-center">
				<div className="w-full md:w-1/2 mx-auto space-y-6">
					<h2 className="text-3xl md:text-4xl font-semibold leading-tight">
						Join ARTISH as a freelancer to get discovered and paid for your
						creative skills
					</h2>
					<div className="flex justify-center -space-x-4 mb-4">
						<Image
							src={Avatar3}
							alt="Person 1"
							className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
						/>
						<Image
							src={Avatar2}
							alt="Person 2"
							className="w-10 h-10 lg:w-12 lg:h-12 rounded-full  object-cover"
						/>
						<Image
							src={Avatar1}
							alt="Person 3"
							className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
						/>
					</div>
					<Link
						href="/login"
						className="font-semibold rounded-md border-2 border-black py-3 px-10 bg-black text-white inline-flex gap-4 items-center"
					>
						Get Started <FaArrowRight />
					</Link>
				</div>
			</section>
			<section className="my-28 md:my-32 space-y-10">
				<div className="flex gap-10 justify-between items-center flex-col md:flex-row">
					<div className="basis-1/2">
						<h2 className="text-2xl md:text-3xl font-semibold mb-6">
							Set-up an account and complete your profile
						</h2>
						<p className="text-[#130E01] leading-relaxed text-base md:text-lg">
							Create an identity that speaks for you and your work so you can
							tap into a creative community designed for excellence and
							efficiency.{' '}
							<Link href="#" className="text-[#B30445] underline">
								Learn More
							</Link>
						</p>
					</div>
					<div className="basis-1/2 ">
						<Image
							src={SetUpImg}
							alt="Set up account"
							className="w-[300px] md:w-[500px]"
						/>
					</div>
				</div>
				<div className="flex gap-10 justify-between items-center flex-col md:flex-row-reverse">
					<div className="basis-1/2">
						<h2 className="text-2xl md:text-3xl font-semibold mb-6">
							Match with paying clients or find the right skill-set
						</h2>
						<p className="text-[#130E01] leading-relaxed text-base md:text-lg">
							Whether you’re looking to exchange your skills for financial
							freedom, or you want to manage production of creative work without
							stress, ARTISH provides a trust-led enviroment to bring you a
							truly visionary experience of the future of work.{' '}
							<Link href="#" className="text-[#B30445] underline">
								Learn More
							</Link>
							.
						</p>
					</div>
					<div className="">
						<Image
							src={MatchClient}
							alt="Match with client"
							className="w-[300px] md:w-[500px]"
						/>
					</div>
				</div>
			</section>
			<section className="my-28 md:my-36">
				<div className="w-full md:w-1/2 mx-auto space-y-6 text-center">
					<h2 className="text-3xl md:text-4xl font-semibold leading-tight">
						The future of work is here and <br />
						now!
					</h2>
					<p className="leading-relaxed text-lg">
						Join millions of people all over the world charting a path to the
						new frontier of creative and professional services
					</p>
					<div className="flex items-center gap-5 justify-center">
						<Link
							href="/login"
							className="font-semibold rounded-md border-2 border-black py-3 px-2 md:px-6 bg-black text-white"
						>
							Join as a Freelancer
						</Link>
						<Link
							href="/login"
							className="font-semibold rounded-md border-2 border-black py-3 px-2 md:px-6 bg-white text-black"
						>
							Join as a Project Commissioner
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default GetStarted;
