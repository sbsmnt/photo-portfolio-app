import React, { useState } from 'react';

interface Props {
	open: boolean;
	categories: string[];
	changeGallery: (gallery: string) => void;
	changeAbout?: () => void;
	closeMenu: () => void;
}

export const Menu = ({
	open,
	categories,
	changeGallery,
	changeAbout,
	closeMenu,
}: Props) => {
	const menuItems = categories;
	const [active, setActive] = useState(menuItems[0]);

	const handleMenuClick = (gallery: string) => {
		changeGallery(gallery);
		setActive(gallery);
		closeMenu();
	};

	return (
		<nav id="main-menu" className={open ? 'open' : 'closing'}>
			<ul>
				{menuItems.map((item) => (
					<li
						key={item}
						data-menu={item}
						className={item === active ? 'active' : ''}
						onClick={() => handleMenuClick(item)}>
						{item}
					</li>
				))}
			</ul>
		</nav>
	);
};
