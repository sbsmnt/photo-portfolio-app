import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../Menu/Menu';

interface Props {
	categories: string[];
	changeGallery: (gallery: string) => void;
}

export const Header = ({ categories, changeGallery }: Props) => {
	const [smMenu, setSmMenu] = useState(false);
	const icon = smMenu ? faTimes : faBars;

	const handleMenu = () => {
		setSmMenu(!smMenu);
	};

	return (
		<>
			<header>
				<button id="sm-menu" onClick={handleMenu}>	
					<FontAwesomeIcon icon={icon} size="lg" />
				</button>
				<div>
					<h1>
						<a href="/">Tiago Eira</a>
					</h1>
				</div>
			</header>
			<Menu
				open={smMenu}
				categories={categories}
				changeGallery={changeGallery}
				closeMenu={handleMenu}
				// changeAbout={handleAboutChange}
			/>
		</>
	);
};
