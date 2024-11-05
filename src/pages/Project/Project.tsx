import React from 'react';
import { find } from 'lodash';
import { useParams } from 'react-router-dom';
import { IMAGES } from '../../const';

export const Project = () => {
	const params = useParams();
	const { id } = params;
	const project = find(IMAGES, { id });

	return (
		<div className="boxed project">
			{project && (
				<>
					<h1>{project.title}</h1>
					<img src={project.images[0].img} alt={project.title} />
					<p>{project.description}</p>
				</>
			)}
		</div>
	);
};
