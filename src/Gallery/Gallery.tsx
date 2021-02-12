import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Loading } from '../shared/Loading/Loading';
import { GalleryImage } from './GalleryImage';
import { AllImages } from '../ImageData/Images';

interface Props {
	type: string;
}

export const Gallery = ({ type }: Props) => {
	const [activeImage, setActiveImage] = useState(0);
	const [prev, setPrev] = useState(false);
	const [next, setNext] = useState(true);

	const currentGallery = AllImages.find((gallery) => gallery.category === type);

	useEffect(() => {
		setActiveImage(0);
		setPrev(false);
		setNext(true);
	}, [type]);

	const handleNextImage = () => {
		const nextImage = activeImage + 1;
		if (currentGallery && currentGallery.images[nextImage]) {
			setActiveImage(nextImage);
			nextImage === currentGallery.images.length - 1 && setNext(false);
			!prev && setPrev(true);
		} else {
			setNext(false);
		}
	};

	const handlePrevImage = () => {
		const prevImage = activeImage - 1;
		if (currentGallery && currentGallery.images[prevImage]) {
			setActiveImage(prevImage);
			prevImage === 0 && setPrev(false);
			!next && setNext(true);
		} else {
			setPrev(false);
		}
	};

	return (
		<section id="main">
			<article id="gallery">
				<div className="gwrapper">
					<div
						className={prev ? 'g-prev' : 'g-prev inactive'}
						onClick={handlePrevImage}>
						<FontAwesomeIcon icon={faAngleLeft} />
					</div>

					<div className="home-gallery">
						{!currentGallery && <Loading />}

						{currentGallery &&
							currentGallery.images.map((image, indx) => (
								<GalleryImage
									key={image.url}
									active={indx === activeImage ? true : false}
									image={image.url}
									name={image.name}
								/>
							))}
					</div>

					<div
						className={next ? 'g-next' : 'g-next inactive'}
						onClick={handleNextImage}>
						<FontAwesomeIcon icon={faAngleRight} />
					</div>
				</div>
			</article>
		</section>
	);
};
