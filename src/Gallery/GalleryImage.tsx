import React from 'react';

interface Props {
	active: boolean;
	image: string;
	name: string;
}

export const GalleryImage = ({active, image, name }: Props) => {
	return (
		<div className={active?'gallery-image active': 'gallery-image'}>
			<img src={image} alt={name} width="100%" height="100%" />
		</div>
	);
};
