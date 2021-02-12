import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faUnsplash } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
	return (
		<footer>
			<div className="social-links">
				<a
					href="https://www.instagram.com/sbsmnt/"
					target="_blank"
					rel="noreferrer">
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				|
				<a
					href="https://unsplash.com/@tiagoeira"
					target="_blank"
					rel="noreferrer">
					<FontAwesomeIcon icon={faUnsplash} />
				</a>
				|
				<a href="https://www.tiagoeira.com/" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faCode} />
				</a>
			</div>
		</footer>
	);
};
