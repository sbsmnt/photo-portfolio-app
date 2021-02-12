import React, { useState } from 'react';
import { AllImages } from '../ImageData/Images';
import { Loading } from '../shared/Loading/Loading';
import { Lightbox } from '../shared/Lightbox/Lightbox';
import { nanoid } from 'nanoid';

interface Props {
	type: string;
}

interface Image {
	name: string;
	url: string;
}

const chunk = (array: Array<Image>, size: number) => {
	const chunked_arr = [];
	let index = 0;
	while (index < array.length) {
		chunked_arr.push(array.slice(index, size + index));
		index += size;
	}
	return chunked_arr;
};

export const Grid = ({ type }: Props) => {
	const [fullImg, setFullImg] = useState({ open: false, url: '' });
	const currentGrid = AllImages.find((grid) => grid.category === type);
	const columns = currentGrid && chunk(currentGrid.images, 3);

	const handleOpenLightBox = (img: Image) => {
		setFullImg({ open: true, url: img.url });
	};

	const handleCloseLightBox = () => {
		setFullImg({ open: false, url: '' });
	};

	return (
		<section id="main">
			<article id="tiles">
				<div className="home-gallery-tiles">
					<div className="row">
						{!currentGrid && <Loading />}
						{columns &&
							columns.map((col) => (
								<div key={nanoid()} className="column">
									{col.map((img) => (
										<div
											key={nanoid()}
											className="image-tile"
											onClick={() => handleOpenLightBox(img)}>
											<img src={img.url} alt={img.name} />
										</div>
									))}
								</div>
							))}
					</div>
				</div>
			</article>
			<Lightbox
				open={fullImg.open}
				close={handleCloseLightBox}
				active={fullImg.url}
				images={currentGrid?.images}
			/>
		</section>
	);
};
