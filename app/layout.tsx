import type { Metadata } from 'next';
import './globals.css';

// font imports
import { Plus_Jakarta_Sans } from 'next/font/google';

// component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// declare fonts
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Artish',
	description: 'Artish',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={plusJakartaSans.className}>
				<main>
					<Navbar />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
