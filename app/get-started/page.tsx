import Link from 'next/link';
import Image from 'next/image';

import DataIcon from '@/public/icons/data-icon.png';

const page = () => {
	return (
		<section className="container bg-white my-28">
			<div className="mx-auto text-center space-y-5">
				<p className="font-semibold">
					Welcome to the new frontier of getting things done
				</p>
				<h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
					Which option best describes <br />
					your goals?
				</h2>
				<p>I would like to....</p>
			</div>
			<div className="mt-20 flex gap-10 flex-col md:flex-row">
				<div className="border border-black p-8 rounded-xl space-y-5">
					<Image src={DataIcon} alt="Data Icon" className="w-10 h-10" />
					<h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
						Hire freelancers{' '}
					</h3>
					<p>
						You’re a recruitment guru, business owner, or project manager with a
						keen eye for talent
					</p>
					<Link
						href="/login"
						className="font-semibold rounded-md border border-black py-2 px-4 bg-black text-white inline-block"
					>
						Get Started
					</Link>
				</div>
				<div className="border border-black p-8 rounded-xl space-y-5">
					<Image src={DataIcon} alt="Data Icon" className="w-10 h-10" />
					<h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
						Get paid for my skills
					</h3>
					<p>
						You’re a digitally-skilled creative maverick, looking to make money
						from doing what you love to do best
					</p>
					<Link
						href="/login"
						className="font-semibold rounded-md border border-black py-2 px-4 bg-black text-white inline-block"
					>
						Get Started
					</Link>
				</div>
			</div>
		</section>
	);
};

export default page;
