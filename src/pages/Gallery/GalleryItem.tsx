import React from 'react';
import { ProjectType } from './types';
import { Link } from 'react-router-dom';
import './GalleryItem.css';

export const GalleryItem = ({ id, thumbnail, title }: GalleryItemProps) => {
	return (
		<li>
			<Link to={`/gallery/${id}`}>
				<img alt={title} height="300" src={thumbnail} width="300" />
			</Link>
		</li>
	);
};

type GalleryItemProps = ProjectType;
