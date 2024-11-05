import React from 'react';
import { ProjectType } from './types';
import { Link } from 'react-router-dom';
import './GalleryItem.css';

export const GalleryItem = ({ id, thumbnail, title }: GalleryItemProps) => {
	return (
		<li>
			<Link to={`/gallery/${id}`}>
				<img src={thumbnail} />
			</Link>
		</li>
	);
};

type GalleryItemProps = ProjectType;
