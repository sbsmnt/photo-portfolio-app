import React from 'react';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTimes,
} from '@fortawesome/free-solid-svg-icons';
import './Lightbox.scss';

interface Props {
	open: boolean;
	close: () => void;
	active: string;
	images: Array<Image> | undefined;
}

interface Image {
	name: string;
	url: string;
}

export const Lightbox = ({ open, close, active, images }: Props) => {
	return (
		<div className={open ? "lightbox open" : "lightbox"}>
			<div className="close-lightbox" onClick={close}>
				<FontAwesomeIcon icon={faTimes} />
			</div>

			<div className="lightbox-content">
				{/* <div className="g-prev">
					<FontAwesomeIcon icon={faAngleLeft} />
				</div> */}
				{images &&
					images.map((image) => (
						<div
							key={nanoid()}
							className={
								active === image.url ? 'grid-slide active' : 'grid-slide'
							}>
							<img src={image.url} alt={image.name} />
						</div>
					))}

				{/* <div className="g-next">
					<FontAwesomeIcon icon={faAngleRight} />
				</div> */}
			</div>
		</div>
	);
};
