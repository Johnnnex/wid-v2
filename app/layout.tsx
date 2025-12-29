import { Inter, Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Footer, Header } from '@/components/layout';

export const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
	subsets: ['latin', 'latin-ext', 'devanagari'],
});

export const inter = Inter({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter',
	subsets: [
		'latin',
		'latin-ext',
		'cyrillic',
		'cyrillic-ext',
		'greek',
		'greek-ext',
		'vietnamese',
	],
});

export const playfairDisplay = Playfair_Display({
	weight: ['400', '500', '600', '700', '800', '900'],
	variable: '--font-playfair-display',
	subsets: ['latin', 'latin-ext', 'cyrillic', 'vietnamese'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.className} antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
