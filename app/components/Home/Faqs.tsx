'use client';

import Link from 'next/link';
import { useState } from 'react';

import { IoIosArrowDown } from 'react-icons/io';

type FAQ = {
	id: number;
	question: string;
	answer: string;
};

const faqs: FAQ[] = [
	{
		id: 1,
		question: 'How do I sign up?',
		answer:
			'Signing up is quick and easy! Simply visit our website and click the "Sign Up" button located at the top right corner. You’ll need to provide some basic information such as your name, email address, and a password. After submitting the form, you’ll receive a confirmation email. Just click the link in that email to complete your registration and start using our services.',
	},
	{
		id: 2,
		question: 'How does it work?',
		answer:
			'Our platform works by connecting freelancers with clients looking for specific services. Once you create an account, you can browse available jobs or list your services for clients to find. You can apply for jobs by submitting proposals, and if a client selects your proposal, you’ll work out the details with them directly. Our platform handles all the billing and payments to ensure that transactions are smooth and secure.',
	},
	{
		id: 3,
		question: 'How can I get paid?',
		answer:
			'Payments are processed through our secure platform. Once you complete a job, the client will confirm the work, and the agreed-upon amount will be transferred to your account. You can choose to withdraw your earnings via various methods such as direct deposit, PayPal, or other available electronic payment systems. Payments are typically processed within a few business days of the job completion.',
	},
	{
		id: 4,
		question: 'Is it free to join?',
		answer:
			'Yes, joining our platform is completely free. We believe in providing freelancers and clients a space to connect without upfront costs. While joining is free, we charge a small fee on completed transactions to cover the costs of running the service and providing support. This fee is automatically deducted from the payment, so there are no surprise charges.',
	},
	{
		id: 5,
		question: 'How can I contact support?',
		answer:
			'Our support team is available 24/7 to assist you with any questions or issues you may encounter. The best way to contact us is through our online help center where you can submit a ticket. You can also reach us via our support email or through the chat feature on our website. We strive to respond to all inquiries within 24 hours. For urgent issues, please make sure to mark your query as "urgent" to expedite the process.',
	},
];

const Faqs = () => {
	const [openItemId, setOpenItemId] = useState<number | null>(null);

	const toggleItem = (id: number) => {
		setOpenItemId(openItemId === id ? null : id);
	};
	return (
		<section className="bg-white py-20">
			<div className="container">
				<h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">FAQs</h2>
				<p className="py-4 text-base ld:text-xl w-full lg:w-1/2">
					Find quick answers to common questions about signing up on ARTISH as a
					freelancer or as a business owner.
				</p>
				<div className="py-10">
					{faqs.map(({ id, question, answer }) => (
						<div
							key={id}
							className={`py-5 border-b-2 border-black ${
								id === 1 ? 'border-t-2' : ''
							}`}
						>
							<div
								onClick={() => toggleItem(id)}
								className="flex justify-between items-center cursor-pointer font-semibold"
							>
								<p>{question}</p>
								<IoIosArrowDown />
							</div>
							{openItemId === id && (
								<div className="py-5 leading-7">
									<p>{answer}</p>
								</div>
							)}
						</div>
					))}
				</div>
				<div className="space-y-3 pt-10">
					<h3 className="text-2xl font-semibold">Still have questions?</h3>
					<p>Contact us for more information or assistance.</p>
					<Link
						href="/login"
						className="font-semibold rounded-md border-2 border-black p-3 bg-white text-black inline-block"
					>
						Contact Us
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Faqs;
