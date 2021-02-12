import React, { useState } from 'react';
import { ViewStyle } from './ViewStyle';
import { Gallery } from '../Gallery/Gallery';
import { Grid } from '../Grid/Grid';

interface Props {
  gallery: string;
}

export const Portfolio = ({gallery}: Props) => {
	const [grid, setGrid] = useState(false);

	const handleViewStyleChange = () => {
		setGrid(!grid);
	};

	return (
		<>
			<ViewStyle grid={grid} changeView={handleViewStyleChange} />
			{!grid && <Gallery type={gallery} />}
			{grid && <Grid type={gallery} />}
		</>
	);
};
