import Image from 'next/image';

const TrustedCompanies = [
	{
		name: 'Google',
		logo: '/images/google.png',
	},
	{
		name: 'Crown DNA',
		logo: '/images/crown-dna.png',
	},
	{
		name: 'Big Cabal Media',
		logo: '/images/big-cabal-media.png',
	},
];

const TrustedBy = () => {
	return (
		<section className="bg-white">
			<div className="container flex flex-wrap justify-between items-center py-10">
				<p className="font-semibold">
					You can trust us, these companies <br />
					already have
				</p>
				<div className="flex gap-5">
					{TrustedCompanies.map(({ name, logo }) => (
						<Image
							key={name}
							src={logo}
							alt={name}
							width={100}
							height={100}
							className="object-contain"
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default TrustedBy;
