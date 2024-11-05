import React from 'react';
import { find } from 'lodash';
import { useParams } from 'react-router-dom';
import { IMAGES } from '../../const';

export const Project = () => {
	const params = useParams();
	const { id } = params;
	const project = find(IMAGES, { id });

	return (
		<div className="project">
			<h1>{project?.title}</h1>
		</div>
	);
};
