import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
	{
		id: 1,
		title: 'The Future of Freelancing',
		featureImg: '/images/featured-img-3.jpeg',
		readTime: '5',
		excerpt:
			'Learn how the creator economy is reshaping the freelance industry.',
		category: 'New',
	},
	{
		id: 2,
		title: 'How to Get Started as a Freelancer',
		featureImg: '/images/featured-img-2.jpeg',
		readTime: '3',
		excerpt: 'Discover the steps to take to start your freelancing journey.',
		category: 'Trends',
	},
	{
		id: 3,
		title: 'The Best Tools for Freelancers',
		featureImg: '/images/featured-img-1.png',
		readTime: '4',
		excerpt: 'Explore the top tools to help you succeed as a freelancer.',
		category: 'Tools',
	},
];

const Blog = () => {
	return (
		<section className="bg-[#FCFBFC]  py-28">
			<div className="container">
				<h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Blog</h2>
				<p className="py-4 text-base ld:text-xl">
					Discover the latest trends, tools, and resources in the creator
					economy.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12 ">
					{blogPosts.map(
						({ id, title, featureImg, readTime, excerpt, category }) => (
							<div key={id} className="border-black border-2 rounded-xl">
								<div className="">
									<Image
										src={featureImg}
										alt={title}
										width={300}
										height={300}
										className="w-full object-cover h-[300px] rounded-tr-xl rounded-tl-xl"
									/>
								</div>
								<div className="p-5 pb-10">
									<div className="flex gap-3 items-center font-semibold">
										<span className="bg-[#F4F4F4] p-2 rounded">{category}</span>
										<span>{readTime} min read</span>
									</div>
									<h3 className="pt-4 pb-3 text-xl font-semibold">{title}</h3>
									<p>{excerpt}</p>
								</div>
							</div>
						)
					)}
				</div>
				<div className="flex justify-end">
					<Link
						href="/login"
						className="font-semibold rounded-md border-2 border-black py-3 px-2 md:px-6 bg-white text-black "
					>
						View All
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Blog;
