import React, { useState } from 'react';
import { Portfolio } from './Portfolio/Portfolio';
import { Footer } from './shared/Footer/Footer';
import { Header } from './shared/Header/Header';

function App() {
	const categories: string[] = ['urban', 'street', 'landscape'];
	const [gallery, setGallery] = useState(categories[0]);

	const handleGalleryChange = (gallery: string) => {
		setGallery(gallery);
	};

	return (
		<>
			<Header categories={categories} changeGallery={handleGalleryChange} />
			<Portfolio gallery={gallery} />
			<Footer />
		</>
	);
}

export default App;
