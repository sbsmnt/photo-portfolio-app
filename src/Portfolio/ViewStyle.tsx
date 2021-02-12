import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faImage } from '@fortawesome/free-solid-svg-icons';

interface Props {
	grid: boolean;
	changeView?: () => void;
}

export const ViewStyle = ({ grid, changeView }: Props) => {
	const iconView = grid ? faImage : faThLarge;
	return (
		<div className="view-options" onClick={changeView}>
			<FontAwesomeIcon icon={iconView} size="lg" />
		</div>
	);
};
