import { FaStar } from 'react-icons/fa6';

const Rating = ({ rating }: { rating: number }) => {
	return (
		<div className="flex space-x-1">
			{[1, 2, 3, 4, 5].map((value) => (
				<FaStar
					key={value}
					className={`w-5 h-5 ${
						rating >= value ? 'text-black' : 'text-gray-400'
					}`}
				/>
			))}
		</div>
	);
};

export default Rating;
